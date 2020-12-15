import { Component, OnInit } from '@angular/core';
import { EnvService } from '@angular8-course-ws/config/learning';
import { ILanguage } from '@angular8-course-ws/shared/data-access';

@Component({
  selector: 'angular8-course-ws-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  public languages: ILanguage[];
  public selectedLanguage: ILanguage;

  constructor(envService: EnvService) {
    this.languages = envService.languages;
    this.selectedLanguage = this.languages.find(l=>l.isDefault);
   }

  ngOnInit(): void {
  }

  changeLanguage(lang: ILanguage) {
    window.location.href = lang.href + window.location.pathname;
  }
}
