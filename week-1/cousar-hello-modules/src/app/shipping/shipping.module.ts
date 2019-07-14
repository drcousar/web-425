/*
============================================
; Title: Assignment 1.5
; Author: Donald Cousar
; Date: 14 July 2019
; Description: Building an angular app with components & modules using angular CLI
;===========================================
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }
