import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedState, SharedStateModel } from './shared.state';
import { ChangeThemeAction } from './shared.actions';
import { EnvService, MockEnvService } from '@angular8-course-ws/config/learning';
import { StyleManagerService } from '../style-manager.service';

describe('Shared store', () => {

  let dpgTheme = {
    id: 'deep-purple-green',
    primary: '#673ab7',
    accent: '#4caf50',
    isDark: true,
    href: 'deep-purple-green.css',
    isDefault: false
  };

  let pbgTheme = {
    id: 'pink-blue-gray',
    primary: '#e91e63',
    accent: '#607d8b',
    isDark: false,
    href: 'pink-blue-gray.css',
    isDefault: false
  };

  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SharedState])],
      providers: [{provide: EnvService, useClass: MockEnvService}, StyleManagerService]
    }).compileComponents();
    store = TestBed.inject(Store);

    TestBed.inject(EnvService);
    TestBed.inject(StyleManagerService);
  });

  it('should create an action and add an item', () => {
    const expected: SharedStateModel = {
      themes: [dpgTheme, pbgTheme],      
      selectedTheme: pbgTheme
    };
    store.dispatch(new ChangeThemeAction(pbgTheme));
    const actual = store.selectSnapshot(SharedState.selectedTheme);
    expect(actual).toEqual(expected.selectedTheme);
  });

});
