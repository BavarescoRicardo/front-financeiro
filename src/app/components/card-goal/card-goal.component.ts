import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-goal',
  templateUrl: './card-goal.component.html',
  styleUrls: ['./card-goal.component.scss']
})
export class CardGoalComponent {
  @Input()descricao: string = '';
  @Input()previsao: Date = new Date;
  @Input()valor: number = 0;
  @Input()imagem: string = '';  
}
