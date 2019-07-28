/*
============================================
; Title: Assignment 3.2
; Author: Donald Cousar
; Date: 28 July 2019
; Description: Passing data to routes
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E404Component } from './e404.component';

describe('E404Component', () => {
  let component: E404Component;
  let fixture: ComponentFixture<E404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
