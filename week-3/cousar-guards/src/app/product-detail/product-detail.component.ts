  /*
============================================
; Title: Assignment 3.4
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  
  `,
  styles: [`
    .product { background-color: cyan }
  `]
})

export class ProductDetailComponent implements OnInit {
    dirty: any;
    name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
