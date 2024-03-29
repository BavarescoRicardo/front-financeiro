import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../dao/user/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {    
  user: User = {
    nome: '',
    senha: '',
    email: '',
    idade: 0,
    createdat: '',
    updatedat: ''
  };

  users: any[] = [];
  displayedColumns: string[] = ['nome', 'email', 'idade', 'remover'];  

  constructor(private router: Router, private http : HttpClient) { }
  apiURL = "http://localhost:3000";  

  adicionarUsuario(usuario: any) {
    console.log('User:', usuario);
    this.http.post(`${ this.apiURL }/user`, usuario)    
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
    this.adicionarUsuario(this.user);
  }
  username : string ="";
  password : string ="";
  show: boolean= false;

  removeUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.removerUser(user._id);
    }
  }

  removerUser(indice: any) {
    console.log('usuario:', indice);
    this.http.delete(`${this.apiURL}/user/${indice}`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          this.fetchUsers();
        },
        (erro: any) => {
          if (erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }  

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>(`${this.apiURL}/user`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (data: any[]) => {
          this.users = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
  } 
}