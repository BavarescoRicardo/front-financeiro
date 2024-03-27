import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-simples',
  templateUrl: './card-simples.component.html',
  styleUrls: ['./card-simples.component.scss']
})
export class CardSimplesComponent {
  @Input()src: string = '';
  @Input()texto: string = '';  
}
