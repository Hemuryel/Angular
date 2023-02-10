import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-custom-directive',
  templateUrl: './component-custom-directive.component.html',
  styleUrls: ['./component-custom-directive.component.css']
})
export class ComponentCustomDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public message: string = 'Sample Demostration of Attribute Directives using Custom Directives';
  public color: string = 'blue';
}
