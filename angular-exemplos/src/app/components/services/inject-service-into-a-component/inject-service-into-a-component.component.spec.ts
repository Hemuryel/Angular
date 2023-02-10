import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectServiceIntoAComponentComponent } from './inject-service-into-a-component.component';

describe('InjectServiceIntoAComponentComponent', () => {
  let component: InjectServiceIntoAComponentComponent;
  let fixture: ComponentFixture<InjectServiceIntoAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectServiceIntoAComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectServiceIntoAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
