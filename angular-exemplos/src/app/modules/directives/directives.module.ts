import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesComponent } from 'src/app/components/directives/directives.component';
import { AttributeDirectiveComponent } from 'src/app/components/directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from 'src/app/components/directives/structural-directive/structural-directive.component';
import { NgForComponent } from 'src/app/components/directives/structural-directive/ng-for/ng-for.component';
import { NgIfComponent } from 'src/app/components/directives/structural-directive/ng-if/ng-if.component';
import { NgSwitchComponent } from 'src/app/components/directives/structural-directive/ng-switch/ng-switch.component';
import { ComponentCustomDirectiveComponent } from 'src/app/components/directives/component-custom-directive/component-custom-directive.component';
import { ColorChangeDirective } from 'src/app/directives/custom-directive.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    ComponentCustomDirectiveComponent,
    ColorChangeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    ComponentCustomDirectiveComponent
  ]
})
export class DirectivesModule { }
