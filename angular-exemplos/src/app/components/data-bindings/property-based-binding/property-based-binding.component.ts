import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-based-binding',
  templateUrl: './property-based-binding.component.html',
  styleUrls: ['./property-based-binding.component.css']
})
export class PropertyBasedBindingComponent implements OnInit {

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
