import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display App Title', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Honeydew');
  });

  it('should create Add Dew button', () => {
    page.navigateTo();
    expect(browser.isElementPresent(page.getAddNewDewButton()));
  });

  it('should create Harvest Dews button', () => {
    page.navigateTo();
    expect(browser.isElementPresent(page.getHarvestDewsButton()));
  })
});
