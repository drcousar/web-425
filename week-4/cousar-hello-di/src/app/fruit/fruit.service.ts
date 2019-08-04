  /*
============================================
; Title: Assignment 4.2
; Author: Donald Cousar
; Date: 3 August 2019
; Description: Dependency Injection
;===========================================
*/
import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(0, "Banana", "Yellow");
  }
}
