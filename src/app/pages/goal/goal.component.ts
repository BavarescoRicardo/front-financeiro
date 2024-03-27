import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  goals: any[] = [];
  displayedColumns: string[] = ['descricao', 'previsao', 'valor', 'imagem', 'aportes', 'remover'];  

  constructor(private router: Router, private http : HttpClient) { }

  apiURL = "http://localhost:3000"; 

  ngOnInit() {
    this.fetchGoals();
  }

  fetchGoals() {
    this.http.get<any[]>(`${this.apiURL}/user/${localStorage.getItem('email')}/goal`, {
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
}
