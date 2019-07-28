/*
============================================
; Title: Assignment 3.2
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Passing data to routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class="row">
      <h2>Welcome to the home page</h2>
    </div>
  </div>
`,
styles: [`
  .container {
    margin-top: 20px
  }
  h2 {
    color: steelblue;
  }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
