import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  showColor: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public changeColor(): void {
      this.showColor = !this.showColor;
  }
}
