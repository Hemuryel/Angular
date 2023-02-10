import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationsComponent } from './view-encapsulations.component';

describe('ViewEncapsulationComponent', () => {
  let component: ViewEncapsulationsComponent;
  let fixture: ComponentFixture<ViewEncapsulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
