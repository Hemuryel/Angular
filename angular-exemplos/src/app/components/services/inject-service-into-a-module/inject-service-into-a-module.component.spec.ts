import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectServiceIntoAModuleComponent } from './inject-service-into-a-module.component';

describe('InjectServiceIntoAModuleComponent', () => {
  let component: InjectServiceIntoAModuleComponent;
  let fixture: ComponentFixture<InjectServiceIntoAModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectServiceIntoAModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectServiceIntoAModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
