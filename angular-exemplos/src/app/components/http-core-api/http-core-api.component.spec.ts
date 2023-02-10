import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCoreApiComponent } from './http-core-api.component';

describe('HttpCoreApiComponent', () => {
  let component: HttpCoreApiComponent;
  let fixture: ComponentFixture<HttpCoreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCoreApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCoreApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
