import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactOwnerComponent } from './contact-owner/contact-owner.component';

@NgModule({
  declarations: [ContactOwnerComponent],
  imports: [CommonModule, MatDialogModule],
})
export class DialogsModule {}
