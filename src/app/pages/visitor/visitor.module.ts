import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VisitorComponent } from './visitor/visitor.component';
import { VisitorNavComponent } from './visitor-nav/visitor-nav.component';
import { VisitorRoutingModule } from './visitor-routing.module';

@NgModule({
  declarations: [VisitorComponent, VisitorNavComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    VisitorRoutingModule,
  ],
})
export class VisitorModule {}
