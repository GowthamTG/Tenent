import { ReactiveFormsModule } from '@angular/forms';
import { DashRoutingModule } from './dash-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSliderModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
    DashRoutingModule,
  ],
})
export class DashModule {}
