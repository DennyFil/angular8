import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { AngularMaterialModule } from '@angular8-course-ws/angular-material';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent]
})
export class ThemePickerModule {}
