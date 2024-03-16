import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiles: any[] = [];
  displayedColumns: string[] = ['sub', 'username'];

  constructor(private router: Router, private http: HttpClient) { }
  apiURL = "http://localhost:3000/auth";


  ngOnInit() {
    this.fetchProfiles();
  }

  fetchProfiles() {
        this.http.get<any[]>(`${this.apiURL}/perfil`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }})
      .subscribe(
        (data: any[]) => {
          this.profiles = [data];
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
