import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-based-binding',
  templateUrl: './event-based-binding.component.html',
  styleUrls: ['./event-based-binding.component.css']
})
export class EventBasedBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showAlert() : void {
    console.log('You clicked on the button...');
    alert("Click Event Fired...");
  }
}
