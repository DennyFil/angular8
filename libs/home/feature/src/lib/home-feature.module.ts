import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@angular8-course-ws/theme-picker';
import { LanguagePickerModule } from '@angular8-course-ws/language-picker';
import { EmailInputModule } from '@angular8-course-ws/email-input';

@NgModule({
  imports: [
    CommonModule,
    ThemePickerModule,
    LanguagePickerModule,
    EmailInputModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent}
    ]),
  ],
  declarations: [LandingComponent],
})
export class HomeFeatureModule {}
