import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsEscolaFrontEndComponent } from './reactive-forms-escola-front-end.component';

describe('ReactiveFormsEscolaFrontEndComponent', () => {
  let component: ReactiveFormsEscolaFrontEndComponent;
  let fixture: ComponentFixture<ReactiveFormsEscolaFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsEscolaFrontEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsEscolaFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
