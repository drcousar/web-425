  /*
============================================
; Title: Assignment 3.4
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Child Routes
;===========================================
*/
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {
    
    canDeactivate(component: ProductDetailComponent) {

        if(component.dirty.name) {
          return window.confirm("You have unsave changes. Still want to leave?");
        } else {
            return true;
        }
    }
}