import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public result: string = '';

  @ViewChild(ChildComponent, { static:true}) private _calculator: ChildComponent;

  public reset(): void {
    this.result = '';
    this._calculator.clear(); // chamar método filho
  }

  public add(value: number): void {
      this.result = 'Result of Addition ' + value;
  }

  public subtract(value: number): void {
      this.result = 'Result of Subtraction ' + value;
  }

  public multiply(value: number): void {
      this.result = 'Result of Multiply ' + value;
  }

  public divide(value: number): void {
      this.result = 'Result of Division ' + value;
  }
}
