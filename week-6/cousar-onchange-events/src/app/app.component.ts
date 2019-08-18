/*
============================================
; Title: Assignment 6.4
; Author: Donald Cousar
; Date: 18 August 2019
; Description: Component Communications - OnChange Events
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myGreeting = 'hello';
  myUser: {name: string } = { name: 'John' }
}
