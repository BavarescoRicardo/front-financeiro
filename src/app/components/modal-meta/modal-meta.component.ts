import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-meta',
  templateUrl: './modal-meta.component.html',
  styleUrls: ['./modal-meta.component.scss']
})
export class ModalMetaComponent {
  goal: any = {
    descricao: '',
    previsao:  '',
    valor: '', 
    imagem: '',  
    user: ''
  };

  goals: any[] = [];

  constructor(private router: Router, private http : HttpClient) { }
  apiURL = "http://localhost:3000";  

  adicionarMeta(goal: any) {
    console.log('Goal:', goal);
    this.http.post(`${ this.apiURL }/goal`, goal, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }})    
          .subscribe(
            (resultado: any) => {
              localStorage.setItem('token', resultado.access_token);
              this.router.navigate(['/', 'profile']);
            },
            (erro: any) => {
              if(erro.status == 400) {
                console.log(erro);
              }
            }
          );
  }

  submitForm() {
    this.adicionarMeta(this.goal);
  }
  goalname : string ="";
  password : string ="";
  show: boolean= false;

}
