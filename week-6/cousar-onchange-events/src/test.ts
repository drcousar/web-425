// This file is required by karma.conf.js and loads recursively all the .spec and framework files
/*
============================================
; Title: Assignment 6.4
; Author: Donald Cousar
; Date: 18 August 2019
; Description: Component Communications - OnChange Events
;===========================================
*/
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
