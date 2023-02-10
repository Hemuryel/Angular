import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-pass',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public message :string = '';

  @Input('alert-pop') public message1 :string= ''

  public showAlert():void{
      alert(this.message1);
  }
}
