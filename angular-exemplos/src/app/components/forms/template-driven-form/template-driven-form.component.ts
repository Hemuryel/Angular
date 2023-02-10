import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  public formData: any = {};
  public showMessage: boolean = false;

  public username: string;
  public email: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(formdata: NgForm) {
    this.formData = formdata.value;
    this.showMessage = true;
  }
}
