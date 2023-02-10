import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  private formData: any = {};

  username = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
  ]);

  password = new FormControl('', [
      Validators.required,
      hasExclamationMark
  ]);

  loginForm: FormGroup = this.builder.group({
      username: this.username,
      password: this.password
  });

  public showMessage: boolean = false;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  registerUser() {
      this.formData = this.loginForm.value;
      this.showMessage = true;
  }
}

function hasExclamationMark(input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0;
  return hasExclamation ? null : { needsExclamation: true };
}
