import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-input-value-into-component',
  templateUrl: './pass-input-value-into-component.component.html',
  styleUrls: ['./pass-input-value-into-component.component.css']
})
export class PassInputValueIntoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public val1: string = "This is alert popup message1";
}
