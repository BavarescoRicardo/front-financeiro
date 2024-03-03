import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {  
  user: any = {
    nome: '',
    idade: 0,
    email: '',
    senha: '',
    createdat: '',
    updatedat: '',
  };

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

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }  
}