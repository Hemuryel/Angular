import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListCanalGeekDevComponent } from './to-do-list-canal-geek-dev.component';

describe('ToDoListCanalGeekDevComponent', () => {
  let component: ToDoListCanalGeekDevComponent;
  let fixture: ComponentFixture<ToDoListCanalGeekDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListCanalGeekDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListCanalGeekDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
