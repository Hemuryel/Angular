import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingsComponent } from 'src/app/components/data-bindings/data-bindings.component';
import { InterpolationComponent } from 'src/app/components/data-bindings/interpolation/interpolation.component';
import { PropertyBasedBindingComponent } from 'src/app/components/data-bindings/property-based-binding/property-based-binding.component';
import { EventBasedBindingComponent } from 'src/app/components/data-bindings/event-based-binding/event-based-binding.component';
import { TwoWayDataBindingComponent } from 'src/app/components/data-bindings/two-way-data-binding/two-way-data-binding.component';

import { PassInputValueIntoComponentComponent } from 'src/app/components/data-bindings/pass-input-value-into-component/pass-input-value-into-component.component';
import { ChildComponent as PassInputValueIntoComponentComponentChildComponent } from 'src/app/components/data-bindings/pass-input-value-into-component/child/child.component';

import { ReturnOutputValueFromAComponentComponent } from 'src/app/components/data-bindings/return-output-value-from-a-component/return-output-value-from-a-component.component';
import { ChildComponent as ReturnOutputValueFromAComponentChildComponent } from 'src/app/components/data-bindings/return-output-value-from-a-component/child/child.component';

import { ViewChildComponent } from 'src/app/components/data-bindings/view-child/view-child.component';
import { ChildComponent as ViewChildChildComponent } from 'src/app/components/data-bindings/view-child/child/child.component';

import { InputOutputSemDelegateComponent } from 'src/app/components/data-bindings/input-output-sem-delegate/input-output-sem-delegate.component';
import { AComponent as SemDelegateAComponent } from 'src/app/components/data-bindings/input-output-sem-delegate/a/a.component';
import { BComponent as SemDelegateBComponent } from 'src/app/components/data-bindings/input-output-sem-delegate/a/b/b.component';

import { InputOutputComDelegateComponent } from 'src/app/components/data-bindings/input-output-com-delegate/input-output-com-delegate.component';
import { AComponent as ComDelegateAComponent } from 'src/app/components/data-bindings/input-output-com-delegate/a/a.component';
import { BComponent as ComDelegateBComponent } from 'src/app/components/data-bindings/input-output-com-delegate/a/b/b.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataBindingsComponent,
    InterpolationComponent,
    PropertyBasedBindingComponent,
    EventBasedBindingComponent,
    TwoWayDataBindingComponent,
    PassInputValueIntoComponentComponent,
    PassInputValueIntoComponentComponentChildComponent,
    ReturnOutputValueFromAComponentComponent,
    ReturnOutputValueFromAComponentChildComponent,
    ViewChildComponent,
    ViewChildChildComponent,
    InputOutputSemDelegateComponent,
    SemDelegateAComponent,
    SemDelegateBComponent,
    InputOutputComDelegateComponent,
    ComDelegateAComponent,
    ComDelegateBComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataBindingsComponent,
    InterpolationComponent,
    PropertyBasedBindingComponent,
    EventBasedBindingComponent,
    TwoWayDataBindingComponent,
    PassInputValueIntoComponentComponent,
    PassInputValueIntoComponentComponentChildComponent,
    ReturnOutputValueFromAComponentComponent,
    ReturnOutputValueFromAComponentChildComponent,
    ViewChildComponent,
    ViewChildChildComponent,
    InputOutputSemDelegateComponent,
    SemDelegateAComponent,
    SemDelegateBComponent,
    InputOutputComDelegateComponent,
    ComDelegateAComponent,
    ComDelegateBComponent
  ]
})
export class DataBindingsModule { }
