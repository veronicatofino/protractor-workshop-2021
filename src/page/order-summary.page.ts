import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmation: ElementFinder;

  constructor () {
    this.orderConfirmation = $('.cheque-indent > .dark');
  }

  public async checkOrderConfirmation(): Promise<void> {
    await expect((this.orderConfirmation).getText()).toBe('Your order on My Store is complete.');
  }
}
