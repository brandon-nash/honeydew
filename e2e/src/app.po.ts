import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  // Main UI elements
  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  getNewDewNameText() {
    return element(by.id('txtNewDewName'));
  }

  getNewDewDescriptionText() {
    return element(by.id('txtNewDewDescription'));
  }

  getAddNewDewButton() {
    return element(by.id('btnAddNewDew'));
  }

  getHarvestDewsButton() {
    return element(by.id('btnHarvestDews'));
  }

  getDewsList() {
    return element.all(by.css('.dews li'));
  }
}
