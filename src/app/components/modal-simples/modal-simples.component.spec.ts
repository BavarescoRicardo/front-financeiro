import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimplesComponent } from './modal-simples.component';

describe('ModalSimplesComponent', () => {
  let component: ModalSimplesComponent;
  let fixture: ComponentFixture<ModalSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSimplesComponent]
    });
    fixture = TestBed.createComponent(ModalSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
