import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    DashComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashModule { }
