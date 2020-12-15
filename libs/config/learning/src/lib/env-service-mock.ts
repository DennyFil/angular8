import { ITheme, ILanguage } from '@angular8-course-ws/shared/data-access';

export class MockEnvService {
  debugMode: true;
  themes: ITheme[] = [
    {
      id: 'pink-blue-gray',
      primary: '#e91e63',
      accent: '#607d8b',
      isDark: false,
      href: 'pink-blue-gray.css',
      isDefault: false
    }
  ];
  languages: ILanguage[] = [
    {
      name: "English",
      href: "http://localhost:4200",
      isDefault: true
    }
  ];
}