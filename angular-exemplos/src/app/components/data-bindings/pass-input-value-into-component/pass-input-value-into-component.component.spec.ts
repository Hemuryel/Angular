import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassInputValueIntoComponentComponent } from './pass-input-value-into-component.component';

describe('PassInputValueIntoComponentComponent', () => {
  let component: PassInputValueIntoComponentComponent;
  let fixture: ComponentFixture<PassInputValueIntoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassInputValueIntoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassInputValueIntoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
