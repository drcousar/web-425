/*
============================================
; Title: Assignment 4.4
; Author: Donald Cousar
; Date: 4 August 2019
; Description: Async Pipe
;===========================================
*/
import { TestBed } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitService = TestBed.get(FruitService);
    expect(service).toBeTruthy();
  });
});
