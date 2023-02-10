import { Component, OnInit } from '@angular/core';
import { BasicServiceService as StudentService } from 'src/app/services/basic-service.service';

@Component({
  selector: 'app-basic-service',
  templateUrl: './basic-service.component.html',
  styleUrls: ['./basic-service.component.css']
})
export class BasicServiceComponent implements OnInit {

  public _model: any = {};
  public _source: Array<any>;

  constructor(private _service: StudentService) {
      this._source = this._service.returnStudentData();
  }

  ngOnInit(): void {
  }

  public submit(): void {
      if (this.validate()) {
          this._service.addStudentData(this._model);
          this.reset();
      }
  }

  public reset(): void {
      this._model = {};
  }

  public validate(): boolean {
      let status: boolean = true;
      if (typeof (this._model.name) === "undefined") {
          alert('Name is Blank');
          status = false;
          return;
      }
      else if (typeof (this._model.age) === "undefined") {
          alert('Age is Blank');
          status = false;
          return;
      }
      else if (typeof (this._model.city) === "undefined") {
          alert('City is Blank');
          status = false;
          return;
      }
      else if (typeof (this._model.dob) === "undefined") {
          alert('dob is Blank');
          status = false;
          return;
      }
      return status;
  }
}
