import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@angular8-course-ws/theme-picker';

@NgModule({
  imports: [
    CommonModule,
    ThemePickerModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent}
    ]),
  ],
  declarations: [LandingComponent],
})
export class HomeFeatureModule {}
