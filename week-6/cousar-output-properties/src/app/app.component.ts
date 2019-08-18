/*
============================================
; Title: Assignment 6.3
; Author: Donald Cousar
; Date: 18 August 2019
; Description: Component Communications - Ouput Properties
;===========================================
*/
import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
