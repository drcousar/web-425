/*
============================================
; Title: Assignment 2.3
; Author: Donald Cousar
; Date: 21 July 2019
; Description: Two Way Binding
;===========================================
*/
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
