import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private summaryPage: ElementFinder;

  constructor () {
    this.summaryPage = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStepPage(): Promise<void> {
    await this.summaryPage.click();
  }
}
