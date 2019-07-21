/*
============================================
; Title: Assignment 1.2
; Author: Donald Cousar
; Date: 21 July 2019
; Description: One Way Binding
;===========================================
*/
/*
============================================
; Title: Assignment 1.2
; Author: Donald Cousar
; Date: 21 July 2019
; Description: One Way Binding
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
