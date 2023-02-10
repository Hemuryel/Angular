import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/components/route/views/home/home.component';
import { MobileComponent } from 'src/app/components/route/views/mobile/mobile.component';
import { TvComponent } from 'src/app/components/route/views/tv/tv.component';
import { ComputerComponent } from 'src/app/components/route/views/computer/computer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tv', component: TvComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'computer', component: ComputerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
