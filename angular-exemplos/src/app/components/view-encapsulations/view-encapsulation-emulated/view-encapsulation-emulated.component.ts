import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-emulated',
  templateUrl: './view-encapsulation-emulated.component.html',
  styleUrls: ['./view-encapsulation-emulated.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public message: string = 'Welcome to Angular 8';
}
