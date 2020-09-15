import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'angular8-course-ws-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {

  emailControl = new FormControl('', [Validators.email]);
  constructor() { }

  ngOnInit(): void {
    this.emailControl.valueChanges.pipe(
      debounceTime(500),
      filter(v=>this.emailControl.valid)
    ).subscribe(console.log);
  }
}
