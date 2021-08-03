import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VisitorComponent } from './visitor/visitor.component';
import { VisitorNavComponent } from './visitor-nav/visitor-nav.component';
import { VisitorRoutingModule } from './visitor-routing.module';

@NgModule({
  declarations: [VisitorComponent, VisitorNavComponent],
  imports: [CommonModule, FlexLayoutModule, VisitorRoutingModule],
})
export class VisitorModule {}
