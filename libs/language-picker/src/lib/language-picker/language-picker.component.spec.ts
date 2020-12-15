import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvService, MockEnvService } from '@angular8-course-ws/config/learning';
import { MatMenuModule } from '@angular/material/menu';
import { LanguagePickerComponent } from './language-picker.component';

describe('LanguagePickerComponent', () => {
  let component: LanguagePickerComponent;
  let fixture: ComponentFixture<LanguagePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagePickerComponent ],
      imports: [MatMenuModule],
      providers: [
        {provide: EnvService, useClass: MockEnvService}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(EnvService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
