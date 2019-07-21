/*
============================================
; Title: Assignment 1.2
; Author: Donald Cousar
; Date: 21 July 2019
; Description: One Way Binding
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <h1>{{ name }}</h1>
  <button (click)="changeName()">Change Name</button>
`,
  styles: [
    `
    h1 {
      color: red
    }
    `
  ]
})
export class AppComponent {
  title = 'app';

  //class property
  name:string = "Donald Cousar";

  //change name function
  changeName() {
    this.name = "Don Cousar";
  }
}
