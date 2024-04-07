import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGoalComponent } from './card-goal.component';

describe('CardGoalComponent', () => {
  let component: CardGoalComponent;
  let fixture: ComponentFixture<CardGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGoalComponent]
    });
    fixture = TestBed.createComponent(CardGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
