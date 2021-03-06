import { State, Action, Selector, StateContext, NgxsOnInit, Store } from '@ngxs/store';
import { ChangeLanguageAction, ChangeThemeAction } from './shared.actions';
import { ITheme } from '@angular8-course-ws/shared/data-access';
import { EnvService } from '@angular8-course-ws/config/learning';
import { StyleManagerService } from '../style-manager.service';
import { Injectable } from '@angular/core';
import { ILanguage } from '../interfaces';
import { LanguageManagerService } from '../language-manager.service';

export interface SharedStateModel {
  themes: ITheme[];
  selectedTheme: ITheme;
  languages: ILanguage[];
  selectedLanguage: ILanguage;
}

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    themes: [],
    selectedTheme: undefined,
    languages: [],
    selectedLanguage: undefined
  }
})
@Injectable()
export class SharedState implements NgxsOnInit {

  constructor( 
    private store: Store, 
    private envService: EnvService,
    private styleManagerService: StyleManagerService,
    private languageManagerService: LanguageManagerService
    ) {
      
    }

  @Selector()
  public static themes(state: SharedStateModel) {
    return state.themes;
  }

  @Selector()
  public static selectedTheme(state: SharedStateModel) {
    return state.selectedTheme;
  }

  @Selector()
  public static languages(state: SharedStateModel) {
    return state.languages;
  }

  @Selector()
  public static selectedLanguage(state: SharedStateModel) {
    return state.selectedLanguage;
  }

  ngxsOnInit(ctx?: StateContext<SharedStateModel>){

    const state = ctx.getState();
    const themes = state.themes.length ? state.themes : this.envService.themes;
    const selectedTheme = state.selectedTheme
      ? themes.find(t => t.id == state.selectedTheme.id)
      : themes.find(t => t.isDefault);
    const languages = state.languages.length ? state.languages : this.envService.languages;
    const selectedLanguage = state.selectedLanguage
      ? languages.find(t => t.name == state.selectedLanguage.name)
      : languages.find(t => t.isDefault);

    ctx.patchState({themes, selectedTheme, languages, selectedLanguage});

    this.store.select<ITheme>(store => store.shared ? store.shared.selectedTheme : undefined).subscribe(theme => {
      this.styleManagerService.changeTheme(theme);
    });

    this.store.select<ILanguage>(store => store.shared ? store.shared.selectedLanguage : undefined).subscribe(lang => {
      this.languageManagerService.changeLanguage(lang);
    });
  }
  
  @Action(ChangeThemeAction)
  public changeTheme(ctx: StateContext<SharedStateModel>, { theme }: ChangeThemeAction) {
    if(theme){
      ctx.patchState({ selectedTheme: theme });
    }
  }

  @Action(ChangeLanguageAction)
  public changeLanguage(ctx: StateContext<SharedStateModel>, { language }: ChangeLanguageAction) {
    if(language){
      ctx.patchState({ selectedLanguage: language });
    }
  }
}
