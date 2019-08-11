  /*
============================================
; Title: Assignment 5.4
; Author: Donald Cousar
; Date: 10 August 2019
; Description: Angular Material: Flex Layout
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="parent" fxLayout="row">
      <div class="left" fxFlex></div>
      <div class="right" fxFlex><h2>Welcome to Flexible Layouts</h2></div>
    </div>
  `,
  styles: [`
    
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
