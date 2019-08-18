/*
============================================
; Title: Assignment 6.3
; Author: Donald Cousar
; Date: 18 August 2019
; Description: Component Communications - Ouput Properties
;===========================================
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor'; //Added above to import from @angular/core instead
import { PriceQuote } from './iprice-quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside PriceQuoteComponent
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice | currency: 'USD' }}
    </strong>
  `,
  styles: []
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() { 
    interval(2000)
      .subscribe(data => {
          this.priceQuote = {
            stockSymbol: 'IBM',
            lastPrice: 100 * Math.random()
          };

          this.lastPrice.emit(this.priceQuote);
      });

  }

  ngOnInit() {
  }

}
