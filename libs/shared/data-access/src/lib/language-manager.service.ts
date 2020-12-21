import { Injectable } from '@angular/core';
import { ILanguage } from './interfaces';

@Injectable()
export class LanguageManagerService {

  changeLanguage(language: ILanguage) {
    if(language && !window.location.href.startsWith(language.href)){
      const baseRef = document.getElementsByTagName('base')[0].href;
      const pathname = window.location.href.replace(baseRef, '');
      window.location.href = language.href + pathname;
    }
  }
}
