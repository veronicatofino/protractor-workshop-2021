import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedPage {
  private summaryPage: ElementFinder;

  constructor () {
    this.summaryPage = $('#layer_cart a[title="Proceed to checkout"]');
  }

  public async goToSummaryStepPage(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.summaryPage), 4000);
    await this.summaryPage.click();
  }
}
