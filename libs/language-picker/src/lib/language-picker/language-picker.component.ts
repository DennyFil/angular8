import { Component } from '@angular/core';
import { ILanguage, SharedState, ChangeLanguageAction } from '@angular8-course-ws/shared/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular8-course-ws-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent {

  @Select(SharedState.languages)
  public languages$: Observable<ILanguage[]>;

  @Select(SharedState.selectedLanguage)
  public selectedLanguage: Observable<ILanguage>;

  constructor(private store: Store) {
  }

  changeLanguage(lang: ILanguage) {
    this.store.dispatch(new ChangeLanguageAction(lang));
  }
}
