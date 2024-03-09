import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {  
  user: any = {
    nome: '',
    senha: '',
    email: '',
    idade: 0,
    createdat: '',
    updatedat: '',
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
    this.adicionarUsuario(this.user);
    // Add your API call or other logic to save the user
  }
  username : string ="";
  password : string ="";
  show: boolean= false;

  removeUser(user: any) {
    // Add logic to remove the budget item, e.g., make an HTTP DELETE request
    const index = this.users.indexOf(user);
    if (index !== -1) {
      console.log("Tenta remover");
      console.log(user._id);
      this.removerUser(user._id);
    }
  }

  removerUser(indice: any) {
    console.log('usuario:', indice);
    this.http.delete(`${this.apiURL}/user/${indice}`)
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
    this.http.get<any[]>(`${this.apiURL}/user`)
      .subscribe(
        (data: any[]) => {
          this.users = data; // Use the correct property name here
        },
        (error: any) => {
          console.error(error);
        }
      );
  } 
}