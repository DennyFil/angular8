import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@angular8-course-ws/angular-material';
import { EmailInputComponent } from './email-input/email-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  exports: [EmailInputComponent],
  declarations: [EmailInputComponent],
})
export class EmailInputModule {}
