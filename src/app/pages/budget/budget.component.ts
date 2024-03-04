import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {  
  budget: any = {
    nome: '',
    amount: 0,
    category: ''
  };

  constructor(private router: Router, private http : HttpClient) { }
  apiURL = "http://localhost:3000";  

  adicionarBudget(budget: any) {
    console.log('Budget:', budget);
    this.http.post(`${ this.apiURL }/budget`, budget)    
              .subscribe(
                (resultado: any) => {
                  console.log(resultado)
                },
                (erro: any) => {
                  if(erro.status == 400) {
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
  username : string ="";
  password : string ="";
  show: boolean= false;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["budget"]);
    }else {
      alert("Invalid credentials");
    }
  }  
}