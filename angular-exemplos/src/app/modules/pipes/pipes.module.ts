import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesComponent } from 'src/app/components/pipes/pipes.component';
import { BasicPipeComponent } from 'src/app/components/pipes/basic-pipe/basic-pipe.component';
import { CustomPipeComponent } from 'src/app/components/pipes/custom-pipe/custom-pipe.component';
import { ProperCasePipe } from 'src/app/pipes/custom-pipe.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PipesComponent,
    BasicPipeComponent,
    CustomPipeComponent,
    ProperCasePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PipesComponent,
    BasicPipeComponent,
    CustomPipeComponent
  ],
})
export class PipesModule { }
