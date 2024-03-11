import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http : HttpClient) { }
  show: boolean= false;
  user: any = {
    email: '',
    senha: ''
  };


  submit(){
    this.apiLogin(this.user);
  } 

  ngOnInit() {
  }

  apiURL = "http://localhost:3000/auth";  

  apiLogin(usuario: any) {
    console.log('User:', usuario);
    this.http.post(`${ this.apiURL }/login`, usuario)    
      .subscribe(
        (resultado: any) => {
          // console.log(resultado);
          localStorage.setItem('usuario', resultado);
          console.log(localStorage.getItem('usuario'));
          this.router.navigate(['/', 'budget']);
        },
        (erro: any) => {
          if(erro.status == 400) {
            console.log(erro);
            alert("Email ou senha inválidos")
          }
        }
      );
  }  
}