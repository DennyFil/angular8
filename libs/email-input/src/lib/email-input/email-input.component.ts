import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter, tap, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { ITheme, SharedState } from '@angular8-course-ws/shared/data-access';
import { Select } from '@ngxs/store';

@Component({
  selector: 'angular8-course-ws-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmailInputComponent,
      multi: true
    }
  ],
  animations:[
    trigger('focusAnimation', [
      state('default', style({
        transform: 'scale(1)',
        'box-shadow': 'none'
      })),
      state('focused', style({
        transform: 'scale(1.05)',
        'box-shadow': '0 0 1.5rem rgba({{shadowRgb}},.5)'
      }), { params: { shadowRgb: '0,0,0'}}),
      transition('default <=> focused', animate(150))
    ])
  ]
})
export class EmailInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Select(SharedState.selectedTheme)
  selectedTheme$: Observable<ITheme> = new Observable<ITheme>();

  @Input() debounceTime = 500;
  emailControl = new FormControl('', [Validators.email]);

  private onChange: any;
  private subs: Subscription;                                                                 
  private focusSubject = new BehaviorSubject<number>(0);
  focusState$ = this.focusSubject.pipe(
    map(val => val === 0 ? 'default' : 'focused')
  );

  shadowRgb$ = this.selectedTheme$.pipe(
    map(t => t.isDark ? '255,255,255' : '0,0,0')
  );

  constructor() { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  writeValue(obj: any): void {
    this.emailControl.setValue(obj, { emitEvent: false});
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled)
      this.emailControl.disable();
    else
      this.emailControl.enable();
  }

  updateFocusSubject(value: number){
    const currentValue = this.focusSubject.value;
    this.focusSubject.next(currentValue + value);
  }

  ngOnInit(): void {
    this.subs = this.emailControl.valueChanges.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      filter(v => this.emailControl.valid),
      tap(val => this.onChange(val))
    ).subscribe(console.log);
  }
}
