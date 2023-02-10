import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-shadown-dom',
  templateUrl: './view-encapsulation-shadown-dom.component.html',
  styleUrls: ['./view-encapsulation-shadown-dom.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadownDomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public message: string = 'Welcome to Angular 8';
}
