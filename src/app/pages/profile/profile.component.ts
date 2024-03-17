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
          this.consultaOrcamento();
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  consultaOrcamento() {
    // Add logic to remove the budget item, e.g., make an HTTP DELETE request
    const email = this.profiles[0].sub;
    if (email) {
      console.log("Tenta pesquisar pelo email: " +email);

      const userResult = this.userDao?.fetchOneUser(email);
      if (userResult) {
        const user = userResult as User;
        if (user.budgets) {
          console.log(user.budgets);
        }      
      }
    } 
  } 
}
