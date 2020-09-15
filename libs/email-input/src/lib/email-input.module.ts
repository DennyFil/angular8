import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailInputComponent } from './email-input/email-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EmailInputComponent],
  declarations: [EmailInputComponent],
})
export class EmailInputModule {}
