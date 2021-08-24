import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserComponent } from './user/user.component';
import { UserNavComponent } from './user-nav/user-nav.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserNavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
