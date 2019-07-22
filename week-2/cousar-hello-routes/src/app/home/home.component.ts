/*
============================================
; Title: Assignment 2.4
; Author: Donald Cousar
; Date: 21 July 2019
; Description: RoutesInAction
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="containter">
    <div class="row">
      <h2>Welcome to the Home Page!</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
    padding-left: 20px;
  }
  h2 {
    color: darkorange;
    margin-left: 20px;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
