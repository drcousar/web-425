  /*
============================================
; Title: Assignment 3.3
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Child Routes
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Step 1: Add imports for components
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { HomeComponent } from './home/home.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

//Step 2: Add routes and child routes linking to imports above
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent,
      children: [
        { path: '', component: ProductDescriptionComponent },
        {  path: 'seller/:id', component: SellerInfoComponent }
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
