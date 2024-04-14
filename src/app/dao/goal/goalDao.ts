import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Goal } from "./goal";

export class GoalDao {
    user: Goal = {
        descricao: '',
        previsao: new Date(),
        valor: 0,
        imagem: '',
        movimento: []
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
            return resultado as Goal;
        },
        (erro: any) => {
            if (erro.status == 400) {
            console.log(erro);
            }
        }
        );
    }      
}
