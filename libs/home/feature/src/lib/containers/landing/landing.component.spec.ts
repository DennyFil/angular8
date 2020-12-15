import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvService, MockEnvService } from '@angular8-course-ws/config/learning';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      providers: [{provide: EnvService, useClass: MockEnvService}]
    })
    .compileComponents();

    TestBed.inject(EnvService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
