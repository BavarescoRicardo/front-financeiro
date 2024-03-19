import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSimplesComponent } from '../modal-simples/modal-simples.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  canShow: boolean = false;
  constructor(public dialog: MatDialog) {
    var email = localStorage.getItem('email');
    if(email != null && email.length > 1){
      this.canShow = true;
    } else {
      this.canShow = false;
    }
  }

  openDialog() {
    this.dialog.open(ModalSimplesComponent);
  }  
  @Input()src: string = '';
  @Input()texto: string = '';  
}

