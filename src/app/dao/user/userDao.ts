import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "./user";

export class UserDao {
    user: User = {
        nome: '',
        senha: '',
        email: '',
        idade: 0,
        createdat: '',
        updatedat: '',
        budgets: []
      };
    users: any[] = [];
    apiURL: string;
    constructor(private router: Router, private http: HttpClient, url: string) {
        this.apiURL = url;
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

    fetchUsers() {
        this.http.get<any[]>(`${this.apiURL}/user`)
          .subscribe(
            (data: any[]) => {
              this.users = data;
            },
            (error: any) => {
              console.error(error);
            }
          );
      }

    fetchOneUser(indice: any) {
        console.log('usuario:', indice);
        this.http.get(`${this.apiURL}/user/${indice}`)
        .subscribe(
        (resultado: any) => {
            console.log(resultado);
            return resultado as User;
        },
        (erro: any) => {
            if (erro.status == 400) {
            console.log(erro);
            }
        }
        );
    }      
}
