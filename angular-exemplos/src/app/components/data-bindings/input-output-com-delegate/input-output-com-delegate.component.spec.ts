import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComDelegateComponent } from './input-output-com-delegate.component';

describe('InputOutputComDelegateComponent', () => {
  let component: InputOutputComDelegateComponent;
  let fixture: ComponentFixture<InputOutputComDelegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComDelegateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
