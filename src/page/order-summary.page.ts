import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmation: ElementFinder;

  constructor () {
    this.orderConfirmation = $('#center_column > div > p > strong');

  }

  public async checkOrderConfirmation(): Promise<void> {
    await expect((this.orderConfirmation).getText()).toBe('Your order on My Store is complete.');
  }

}
