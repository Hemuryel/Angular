import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOutputValueFromAComponentComponent } from './return-output-value-from-a-component.component';

describe('ReturnOutputValueFromAComponentComponent', () => {
  let component: ReturnOutputValueFromAComponentComponent;
  let fixture: ComponentFixture<ReturnOutputValueFromAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnOutputValueFromAComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOutputValueFromAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
