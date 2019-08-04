  /*
============================================
; Title: Assignment 4.2
; Author: Donald Cousar
; Date: 3 August 2019
; Description: Dependency Injection
;===========================================
*/
import { Injectable } from '@angular/core';
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): User {
    return new User(0, "Donald", "Cousar", "1000 Galvin Road S Bellevue, NE 68005");
  }
}
