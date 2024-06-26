import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-meta',
  templateUrl: './modal-meta.component.html',
  styleUrls: ['./modal-meta.component.scss']
})
export class ModalMetaComponent {
  goal: any = {
    descricao: '',
    previsao:  '',
    valor: '', 
    imagem: '',  
    user: localStorage.getItem('codigo')
  };

  goals: any[] = [];

  constructor(public dialog: MatDialog, private router: Router, private http : HttpClient) { }
  apiURL = "http://localhost:3000";  

  adicionarMeta(goal: any) {
    this.http.post(`${ this.apiURL }/goal`, goal, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }})    
          .subscribe(
            (resultado: any) => {
              this.closeDialog();
              this.router.navigate(['/', 'goal']);
            },
            (erro: any) => {
              if(erro.status == 400) {
                console.log(erro);
              }
            }
          );
  }

  submitForm() {
    this.adicionarMeta(this.goal);
  }
  goalname : string ="";
  password : string ="";
  show: boolean= false;

  closeDialog() {
    this.dialog.closeAll();
  }    

}
