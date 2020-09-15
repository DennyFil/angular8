import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'angular8-course-ws-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  emailControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.emailControl.valueChanges.subscribe(val => console.log('Landing component: ${val}'));
  }

}
