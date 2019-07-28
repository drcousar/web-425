  /*
============================================
; Title: Assignment 3.3
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Here you can call product ID from app.components
@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Product Detail for Product: {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [`
    .product {
      background-color: cyan;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId: string
  sellerId = 5678;

  //Have to import the activated route
  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
