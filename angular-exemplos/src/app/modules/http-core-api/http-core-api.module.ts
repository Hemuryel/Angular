import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpCoreApiComponent } from 'src/app/components/http-core-api/http-core-api.component';

import { EmployeeListComponent } from 'src/app/components/http-core-api/employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from 'src/app/components/http-core-api/employee/employee-update/employee-update.component';
import { EmployeeAddComponent } from 'src/app/components/http-core-api/employee/employee-add/employee-add.component';

@NgModule({
  declarations: [
    HttpCoreApiComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    EmployeeAddComponent
  ],
  imports: [
    CommonModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    HttpCoreApiComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    EmployeeAddComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HttpCoreApiModule { }
