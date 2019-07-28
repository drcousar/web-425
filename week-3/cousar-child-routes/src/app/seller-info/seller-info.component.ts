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

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      The seller is Mary Lou, id {{sellerID}}
    </p>
  `,
  styles: [`
  :host { background: yellow;}
  `
  ]
})
export class SellerInfoComponent implements OnInit {
  sellerID: string

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
