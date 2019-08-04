  /*
============================================
; Title: Assignment 4.2
; Author: Donald Cousar
; Date: 3 August 2019
; Description: Dependency Injection
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from './fruit/fruit.component';



const routes: Routes = [
  { path: "fruit", component: FruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
