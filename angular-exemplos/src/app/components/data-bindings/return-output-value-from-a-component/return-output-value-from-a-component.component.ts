import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-output-value-from-a-component',
  templateUrl: './return-output-value-from-a-component.component.html',
  styleUrls: ['./return-output-value-from-a-component.component.css']
})
export class ReturnOutputValueFromAComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public val2: string = "This is alert popup message2";

  public onSignupPai(data:any):void{
    let strMessage:string ="Thanks for Signup " + data.name + ". ";
    strMessage += "Email id " + data.email + " has been registered successfully.";
    alert(strMessage);
  }
}
