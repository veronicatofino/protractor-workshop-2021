import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private finishBuy: ElementFinder;

  constructor () {
    this.finishBuy = $('.cart_navigation > button');
  }

  public async goToOrderSummaryPage(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.finishBuy), 4000);
    await this.finishBuy.click();
  }
}
