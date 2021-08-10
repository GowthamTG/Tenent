import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UserNavComponent } from './user-nav/user-nav.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserNavComponent],
  imports: [CommonModule, FlexLayoutModule, UserRoutingModule],
})
export class UserModule {}
