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
    senha: '',
    email: '',
    createdat: '',
    updatedat: '',
    idade: 0,
  };

  constructor(private router: Router) { }

  submitForm() {
    // Handle form submission logic here
    console.log('User:', this.user);
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