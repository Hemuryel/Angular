import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RouteComponent } from 'src/app/components/route/route.component';
import { TvComponent } from 'src/app/components/route/views/tv/tv.component';
import { MobileComponent } from 'src/app/components/route/views/mobile/mobile.component';
import { ComputerComponent } from 'src/app/components/route/views/computer/computer.component';
import { HomeComponent } from 'src/app/components/route/views/home/home.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RouteComponent,
    TvComponent,
    MobileComponent,
    ComputerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    RouteComponent,
    TvComponent,
    MobileComponent,
    ComputerComponent,
    HomeComponent
  ]
})
export class RouteModule { }
