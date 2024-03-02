import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSimplesComponent } from '../modal-simples/modal-simples.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalSimplesComponent);
  }
}
