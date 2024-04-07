import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMetaComponent } from '../../components/modal-meta/modal-meta.component';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss'
})
export class GoalComponent {
  goals: any[] = [];
  displayedColumns: string[] = ['descricao', 'previsao', 'valor', 'imagem', 'remover'];  

  canShow: boolean = false;
  src: string = '';
  texto: string = '';
  constructor(public dialog: MatDialog, private http : HttpClient) { }

  apiURL = "http://localhost:3000"; 

  ngOnInit() {
    this.fetchGoals();
  }

  
  openDialog() {
    this.dialog.open(ModalMetaComponent);
  }  

  fetchGoals() {
    this.http.get<any[]>(`${this.apiURL}/goal`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (data: any[]) => {
          this.goals = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
  
  removeGoal(goal: any) {
    const index = this.goals.indexOf(goal);
    if (index !== -1) {
      this.removerGoal(goal._id);
    }
  }

  removerGoal(indice: string) {
    console.log('Goal:', indice);
    this.http.delete(`${this.apiURL}/goal/${indice}`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          this.fetchGoals();
        },
        (erro: any) => {
          if (erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }   
}
