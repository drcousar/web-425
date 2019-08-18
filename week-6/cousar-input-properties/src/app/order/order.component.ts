/*
============================================
; Title: Assignment 6.2
; Author: Donald Cousar
; Date: 18 August 2019
; Description: Component Communications - Input Properties
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</span>
  `,
  styles: [`
    :host { background: cyan; }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;
  constructor() { }

  ngOnInit() {
  }

}
