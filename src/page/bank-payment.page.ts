import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private finishBuy: ElementFinder;

  constructor () {
    this.finishBuy = $('.cart_navigation > button');
  }

  public async goToOrderSummaryPage(): Promise<void> {
    await this.finishBuy.click();
  }
}
