import { Injectable } from '@angular/core';
import { ILanguage } from './interfaces';

@Injectable()
export class LanguageManagerService {

  changeLanguage(language: ILanguage) {
    if(language && !window.location.href.startsWith(language.href)){
      window.location.href = language.href + window.location.pathname;
    }
  }
}
