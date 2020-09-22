import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigLearningModule } from '@angular8-course-ws/config/learning';
import { NgxsModule } from '@ngxs/store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'home-feature',
          loadChildren: () =>
            import('@angular8-course-ws/home/feature').then(
              (module) => module.HomeFeatureModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    ConfigLearningModule,
    NgxsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
