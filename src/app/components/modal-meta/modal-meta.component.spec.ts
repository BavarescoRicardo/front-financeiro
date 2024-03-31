import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMetaComponent } from './modal-meta.component';

describe('ModalSimplesComponent', () => {
  let component: ModalMetaComponent;
  let fixture: ComponentFixture<ModalMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMetaComponent]
    });
    fixture = TestBed.createComponent(ModalMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
