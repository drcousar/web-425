/*
============================================
; Title: Assignment 4.4
; Author: Donald Cousar
; Date: 4 August 2019
; Description: Async Pipe
;===========================================
*/
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
  <br /><br />
  <div class="container alignCenter">
    <div class="row">
      
        <h2>Dons Fruits</h2>

        <table class="table table-striped table-info">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price Per Pound</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits | async">
              <td>{{fruit.id}}</td>
              <td>{{fruit.name}}</td>
              <td>{{fruit.pricePerPound}}</td>
              <td>{{fruit.quantity}}</td>
            </tr>
          </tbody>       
        </table>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'cousar-async-pipe';
  fruits: Observable<Fruit[]>;

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
