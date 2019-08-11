  /*
============================================
; Title: Assignment 5.4
; Author: Donald Cousar
; Date: 10 August 2019
; Description: Angular Material: Flex Layout
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="parent" fxLayout="row">
    <div class="left" fxFlex></div>
      <div class="right" fxFlex>
        <div class="wrapper">
          <div class="frm-login">
            <mat-card class="login-panel frm-login-panel">
              <mat-card-header class="frm-login-header">
                <mat-toolbar class="frm-login-toolbar">
                  Login Form
                </mat-toolbar>
              </mat-card-header>

              <mat-card-content class="frm-login-body">
                <mat-form-field>
                  <input type="text" matInput placeholder="Username">
                </mat-form-field>

                <mat-form-field>
                    <input type="text" matInput placeholder="Password">
                  </mat-form-field>

              </mat-card-content>

            <mat-card-actions class="frm-login-actions">
              <button mat-raised-button class="btn-login">Cancel</button>
              <button mat-raised-button class="btn-login">Sign in</button>
            </mat-card-actions>
            </mat-card>
          </div>
        </div>
      
    </div>
  </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
