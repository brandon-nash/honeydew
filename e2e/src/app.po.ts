import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  // Main UI elements
  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  getAddNewDewButton() {
    return element(by.id('btnAddNewDew'));
  }

  getHarvestDewsButton() {
    return element(by.id('btnHarvestDews'));
  }
}
