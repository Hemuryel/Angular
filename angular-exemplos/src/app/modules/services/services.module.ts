import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from 'src/app/components/services/services.component';

import { BasicServiceComponent } from 'src/app/components/services/basic-service/basic-service.component';
import { BasicServiceService } from 'src/app/services/basic-service.service';

import { InjectServiceIntoAModuleComponent } from 'src/app/components/services/inject-service-into-a-module/inject-service-into-a-module.component';
import { ChildComponent as InjectServiceIntoAModuleChildComponent } from 'src/app/components/services/inject-service-into-a-module/child/child.component';
import { InjectServiceIntoAModuleService } from 'src/app/services/inject-service-into-a-module.service';

import { InjectServiceIntoAComponentComponent } from 'src/app/components/services/inject-service-into-a-component/inject-service-into-a-component.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServicesComponent,
    BasicServiceComponent,
    InjectServiceIntoAModuleComponent,
    InjectServiceIntoAModuleChildComponent,
    InjectServiceIntoAComponentComponent,
    InjectServiceIntoAModuleChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServicesComponent,
    BasicServiceComponent,
    InjectServiceIntoAModuleComponent,
    InjectServiceIntoAModuleChildComponent,
    InjectServiceIntoAComponentComponent,
    InjectServiceIntoAModuleChildComponent
  ],
  providers: [
    BasicServiceService,
    InjectServiceIntoAModuleService
  ]
})
export class ServicesModule { }
