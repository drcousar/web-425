/*
============================================
; Title: Assignment 7.3
; Author: Donald Cousar
; Date: 25 August 2019
; Description: Form Validation
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cousar-form-validation';

  onSubmit(formData) {
    console.log(formData);
  }
}
