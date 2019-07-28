  /*
============================================
; Title: Assignment 3.4
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="home">Please login here</h1>
  `,
  styles: [`
    .home {background-color: greenyellow; }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
