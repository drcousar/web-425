  /*
============================================
; Title: Assignment 3.4
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Child Routes
;===========================================
*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        let loggedIn = Math.random() < 0.5;

        if(!loggedIn) {
            alert("You're not logged in and will be redirected to the Login page");
            this.router.navigate(["/login"]);
        }
        return loggedIn;
    }
}