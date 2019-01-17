import { AppPage } from './app.po';
import { browser, by } from 'protractor';

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
  });

  it('should add new Dew when fields are populated', () => {
    page.navigateTo();

    page.getNewDewNameText().sendKeys('New Dew Test');
    page.getNewDewDescriptionText().sendKeys('New Dew Description');
    page.getAddNewDewButton().click();
    
    // This isn't totally valid if items had previously been added and are already 
    // being loaded into memory. 
    expect(page.getDewsList().count()).toBeGreaterThan(0);
  });
});
