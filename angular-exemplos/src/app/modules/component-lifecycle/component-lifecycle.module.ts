import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLifecycleComponent } from 'src/app/components/component-lifecycle/component-lifecycle.component';

@NgModule({
  declarations: [
    ComponentLifecycleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentLifecycleComponent
  ]
})
export class ComponentLifecycleModule { }
