import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationShadownDomComponent } from './view-encapsulation-shadown-dom.component';

describe('ViewEncapsulationShadownDomComponent', () => {
  let component: ViewEncapsulationShadownDomComponent;
  let fixture: ComponentFixture<ViewEncapsulationShadownDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationShadownDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationShadownDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
