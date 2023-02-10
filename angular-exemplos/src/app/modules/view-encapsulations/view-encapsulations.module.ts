import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationsComponent } from 'src/app/components/view-encapsulations/view-encapsulations.component';
import { ViewEncapsulationNoneComponent } from 'src/app/components/view-encapsulations/view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationShadownDomComponent } from 'src/app/components/view-encapsulations/view-encapsulation-shadown-dom/view-encapsulation-shadown-dom.component';
import { ViewEncapsulationEmulatedComponent } from 'src/app/components/view-encapsulations/view-encapsulation-emulated/view-encapsulation-emulated.component';
import { NgContentComponent } from 'src/app/components/view-encapsulations/ng-content/ng-content.component';

import { ChildComponent as ViewEncapsulationNoneChildComponent } from 'src/app/components/view-encapsulations/view-encapsulation-none/child/child.component';
import { ChildComponent as ViewEncapsulationShadownDomChildComponent } from 'src/app/components/view-encapsulations/view-encapsulation-shadown-dom/child/child.component';
import { ChildComponent as ViewEncapsulationEmulatedChildComponent } from 'src/app/components/view-encapsulations/view-encapsulation-emulated/child/child.component';
import { ModalComponent } from 'src/app/components/view-encapsulations/ng-content/modal/modal.component';

@NgModule({
  declarations: [
    ViewEncapsulationsComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationShadownDomComponent,
    ViewEncapsulationEmulatedComponent,
    NgContentComponent,
    ViewEncapsulationNoneChildComponent,
    ViewEncapsulationShadownDomChildComponent,
    ViewEncapsulationEmulatedChildComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewEncapsulationsComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationShadownDomComponent,
    ViewEncapsulationEmulatedComponent,
    NgContentComponent
  ],
  schemas: [NO_ERRORS_SCHEMA] // usado para ng-content
})
export class ViewEncapsulationsModule { }
