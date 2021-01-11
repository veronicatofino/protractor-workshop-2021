import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankOption: ElementFinder;

  constructor () {
    this.bankOption = $('.bankwire');
  }

  public async goToBankOption(): Promise<void> {
    await this.bankOption.click();
  }
}
