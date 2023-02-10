import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public value1: number = 10;
  public array1: Array<number> = [10, 22, 14];
  public dt1: Date = new Date();

  public status: boolean = true;

  public returnString(): string {
      return "String return from function";
  }
}
