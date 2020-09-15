import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { AngularMaterialModule } from '@angular8-course-ws/angular-material';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [LanguagePickerComponent],
  exports: [LanguagePickerComponent]
})
export class LanguagePickerModule {}
