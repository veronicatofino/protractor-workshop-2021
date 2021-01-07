import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private finishBuy: ElementFinder;

  constructor () {
    this.finishBuy = $('#cart_navigation > button > span');

  }

  public async goToOrderSummaryPage(): Promise<void> {
    await this.finishBuy.click();
  }

}
