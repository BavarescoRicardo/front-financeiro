import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimplesComponent } from './card-simples.component';

describe('CardSimplesComponent', () => {
  let component: CardSimplesComponent;
  let fixture: ComponentFixture<CardSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSimplesComponent]
    });
    fixture = TestBed.createComponent(CardSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
