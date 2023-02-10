import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBasedBindingComponent } from './event-based-binding.component';

describe('EventBasedBindingComponent', () => {
  let component: EventBasedBindingComponent;
  let fixture: ComponentFixture<EventBasedBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBasedBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBasedBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
