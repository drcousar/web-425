/*
============================================
; Title: Assignment 6.4
; Author: Donald Cousar
; Date: 18 August 2019
; Description: Component Communications - OnChange Events
;===========================================
*/
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{ greeting }}</div>
      <div>User name: {{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child {
      background: lightgray;
    }
  `]
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  ngOnInit() {
  }

}
