/*
============================================
; Title: Assignment 1.5
; Author: Donald Cousar
; Date: 14 July 2019
; Description: Building an angular app with components & modules using angular CLI
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Don Shipping page works great!
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
