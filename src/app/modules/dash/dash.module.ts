import { DashRoutingModule } from './dash-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [DashComponent],
  imports: [CommonModule, DashRoutingModule],
})
export class DashModule {}
