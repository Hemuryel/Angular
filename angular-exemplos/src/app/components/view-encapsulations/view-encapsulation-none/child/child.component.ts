import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-none',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title:string ='This is a Child Component';
}
