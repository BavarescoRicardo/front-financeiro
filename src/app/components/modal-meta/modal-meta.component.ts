import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-simples',
  templateUrl: './modal-meta.component.html',
  styleUrls: ['./modal-meta.component.scss']
})
export class ModalMetaComponent {
  goal: any = {
    nome: '',
    senha: '',
    email: '',
    idade: 0,
    createdat: '',
    updatedat: ''
  };

  goals: any[] = [];
  displayedColumns: string[] = ['nome', 'email', 'idade', 'remover'];  

  constructor(private router: Router, private http : HttpClient) { }
  apiURL = "http://localhost:3000";  

  adicionarUsuario(usuario: any) {
    console.log('Goal:', usuario);
    this.http.post(`${ this.apiURL }/goal`, usuario)    
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
    this.adicionarUsuario(this.goal);
  }
  goalname : string ="";
  password : string ="";
  show: boolean= false;

}
