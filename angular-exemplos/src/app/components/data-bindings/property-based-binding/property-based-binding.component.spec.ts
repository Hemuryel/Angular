import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBasedBindingComponent } from './property-based-binding.component';

describe('PropertyBasedBindingComponent', () => {
  let component: PropertyBasedBindingComponent;
  let fixture: ComponentFixture<PropertyBasedBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBasedBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBasedBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
