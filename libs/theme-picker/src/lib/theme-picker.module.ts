import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { AngularMaterialModule } from '@angular8-course-ws/angular-material';
import { SharedDataAccessModule } from '@angular8-course-ws/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedDataAccessModule
  ],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
  providers: []
})
export class ThemePickerModule {}
