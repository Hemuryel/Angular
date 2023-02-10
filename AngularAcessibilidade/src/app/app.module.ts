import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from "./shared/components/yes-no-button-group/yes-no-button-group.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        YesNoButtonGroupModule,
        ReactiveFormsModule,
        FormsModule,
        DisableControlModule
    ]
})
export class AppModule { }
