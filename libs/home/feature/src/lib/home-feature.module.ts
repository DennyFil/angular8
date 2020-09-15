import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@angular8-course-ws/theme-picker';
import { LanguagePickerModule } from '@angular8-course-ws/language-picker';
import { EmailInputModule } from '@angular8-course-ws/email-input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemePickerModule,
    LanguagePickerModule,
    EmailInputModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent}
    ]),
  ],
  declarations: [LandingComponent],
})
export class HomeFeatureModule {}
