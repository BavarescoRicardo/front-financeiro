import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  budget: any = {
    name: '',
    amount: 0,
    category: '',
    userId: localStorage.getItem('codigo')
  };

  budgets: any[] = [];
  displayedColumns: string[] = ['name', 'amount', 'category', 'remover'];

  constructor(private router: Router, private http: HttpClient) { }
  apiURL = "http://localhost:3000";

  adicionarBudget(budget: any) {
    console.log('Budget:', budget);
    this.http.post(`${this.apiURL}/budget`, budget, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          this.fetchBudgets();
        },
        (erro: any) => {
          if (erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }

  removeBudget(budget: any) {
    const index = this.budgets.indexOf(budget);
    if (index !== -1) {
      this.removerBudget(budget._id);
    }
  }

  removerBudget(indice: string) {
    console.log('Budget:', indice);
    this.http.delete(`${this.apiURL}/budget/${indice}`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          this.fetchBudgets();
        },
        (erro: any) => {
          if (erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }  

  submitForm() {
    // Handle form submission logic here    
    this.adicionarBudget(this.budget);
    // Add your API call or other logic to save the user
  }

  ngOnInit() {
    this.fetchBudgets();
  }

  fetchBudgets() {
    this.http.get<any[]>(`${this.apiURL}/user/${localStorage.getItem('email')}/budgets`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (data: any[]) => {
          this.budgets = data; // Use the correct property name here
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
