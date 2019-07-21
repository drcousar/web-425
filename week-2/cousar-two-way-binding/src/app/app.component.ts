/*
============================================
; Title: Assignment 2.3
; Author: Donald Cousar
; Date: 21 July 2019
; Description: Two Way Binding
;===========================================
*/
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Two-Way Binding</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
<br /><br /><br />
<div class="container-fluid two-way-form">
      <h2>Two Way Binding</h2>
      <br />
      <div class="form-group">
        <input type="text" placeholder="Enter your name..." [(ngModel)]="name"> <br \><br \>
        <button class="btn btn-primary form-control" (click)="name = ''">Clear Name</button>
      </div>

      <div>
        <h3 class="myNameClass">{{ name}} welcome to two-way binding!</h3>
      </div>
</div>
  `,
  styles: [
    `
      .two-way-form {
        width: 50%;
        text-align: center;
      }
      .myNameClass {
        color: red;
        padding-bottom: 20px;
      }
      .form-group {
        height: 100px;
      }
      .form-control {
        height: 50px;
        width: 75%;
      }
      .center {
        margin: 0 auto;
      }
    `
  ]
})
export class AppComponent {
  title = "cousar-two-way-binding";
  name: string = "";
}
