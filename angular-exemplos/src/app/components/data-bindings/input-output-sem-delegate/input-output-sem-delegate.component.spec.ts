import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputSemDelegateComponent } from './input-output-sem-delegate.component';

describe('InputOutputSemDelegateComponent', () => {
  let component: InputOutputSemDelegateComponent;
  let fixture: ComponentFixture<InputOutputSemDelegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputSemDelegateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputSemDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
