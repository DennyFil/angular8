import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ThemePickerComponent } from './theme-picker.component';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedState } from '@angular8-course-ws/shared/data-access';
import { EnvService, MockEnvService } from '@angular8-course-ws/config/learning';
import { StyleManagerService } from 'libs/shared/data-access/src/lib/style-manager.service';

describe('ThemePickerComponent', () => {
  let component: ThemePickerComponent;
  let fixture: ComponentFixture<ThemePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePickerComponent ],
      imports: [MatMenuModule, MatIconModule, MatGridListModule, NgxsModule.forRoot([SharedState])],
      providers: [Store, {provide: EnvService, useClass: MockEnvService}, StyleManagerService]
    })
    .compileComponents();

    TestBed.inject(StyleManagerService);
    TestBed.inject(Store);
    TestBed.inject(EnvService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
