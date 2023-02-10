import { CrudEscolaFrontEndComponent } from './components/crud-escola-front-end/crud-escola-front-end.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentLifecycleModule } from './modules/component-lifecycle/component-lifecycle.module';
import { DataBindingsModule } from './modules/data-bindings/data-bindings.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { FormsModule as FormsComponentModule } from './modules/forms/forms.module';
import { HttpCoreApiModule } from './modules/http-core-api/http-core-api.module';
import { PipesModule } from './modules/pipes/pipes.module';
import { RouteModule } from './modules/route/route.module';
import { ServicesModule } from './modules/services/services.module';
import { ViewEncapsulationsModule } from './modules/view-encapsulations/view-encapsulations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/angular-material/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/angular-material/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ToDoListCanalGeekDevComponent } from './components/to-do-list-canal-geek-dev/to-do-list-canal-geek-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    CrudEscolaFrontEndComponent,
    ToDoListCanalGeekDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLifecycleModule,
    DataBindingsModule,
    DirectivesModule,
    FormsModule,
    HttpCoreApiModule,
    PipesModule,
    RouteModule,
    ServicesModule,
    ViewEncapsulationsModule,
    FormsComponentModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
