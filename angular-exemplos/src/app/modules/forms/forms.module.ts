import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from 'src/app/components/forms/forms.component';
import { TemplateDrivenFormComponent } from 'src/app/components/forms/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from 'src/app/components/forms/model-driven-form/model-driven-form.component';
import { ReactiveFormsEscolaFrontEndComponent } from 'src/app/components/forms/reactive-forms-escola-front-end/reactive-forms-escola-front-end.component';

import { FormsModule as FormsImpModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ReactiveFormsEscolaFrontEndComponent
  ],
  imports: [
    CommonModule,
    FormsImpModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ReactiveFormsEscolaFrontEndComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FormsModule { }
