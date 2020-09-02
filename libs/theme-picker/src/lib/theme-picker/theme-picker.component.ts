import { Component, OnInit } from '@angular/core';
import { EnvService } from '@angular8-course-ws/config/learning';
import { ITheme } from '@angular8-course-ws/shared/shared';

@Component({
  selector: 'angular8-course-ws-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  public themes : ITheme[];

  constructor(env: EnvService) {
    this.themes = env.themes;    
   }

  ngOnInit(): void {
  }

}
