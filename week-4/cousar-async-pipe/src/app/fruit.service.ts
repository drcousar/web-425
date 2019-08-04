/*
============================================
; Title: Assignment 4.4
; Author: Donald Cousar
; Date: 4 August 2019
; Description: Async Pipe
;===========================================
*/
import { Injectable } from '@angular/core';
import { Fruit } from './fruit'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: "banana", pricePerPound: ".59", quantity: 2},
    {id: 2, name: "apple", pricePerPound: "1.59", quantity: 5},
    {id: 3, name: "orange", pricePerPound: ".79", quantity: 5},
    {id: 4, name: "grapes", pricePerPound: "2.39", quantity: 1},
    {id: 5, name: "grapefruit", pricePerPound: ".89", quantity: 3},
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
