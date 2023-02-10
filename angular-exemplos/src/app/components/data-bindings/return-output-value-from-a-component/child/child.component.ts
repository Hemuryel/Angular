import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-return',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() public message :string = '';
  @Input('alert-pop') public message1 :string= ''

  @Output("onSignupFilho") onSignup  = new EventEmitter<any>();

  public data:any={};

  public showAlert():void{
      alert("showAlert = " + this.message1);
  }

  public onSubmit() :void{
    this.onSignup.emit(this.data);
  }
}
