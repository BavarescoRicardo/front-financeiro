import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDao } from '../../dao/user/userDao'
import { User } from '../../dao/user/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any = {
    sub: '',
    username: ''
  };
  profiles: any[] = [];
  user?: User;
  displayedColumns: string[] = ['sub', 'username'];

  constructor(private router: Router, private http: HttpClient) { }
  apiURL = "http://localhost:3000";
  userDao?: UserDao;


  ngOnInit() {
    this.userDao = new UserDao(this.router, this.http, this.apiURL);    
    this.fetchProfiles();
  }

  fetchProfiles() {
        this.http.get<any[]>(`${this.apiURL}/auth/perfil`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (data: any[]) => {
          this.profiles = [data];
          var email = localStorage.getItem('email');
          if(!(email != null && email.length > 1)){
            this.salvaLocalUsuario();
          }          
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  salvaLocalUsuario() {
    const email = this.profiles[0].sub;
    const codigo = this.profiles[0].codigo;
    if (email && codigo) {
      localStorage.setItem('email', email);
      localStorage.setItem('codigo', codigo);
      window.location.reload();
    } 
  } 
}
