import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankOption: ElementFinder;

  constructor () {
    this.bankOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');

  }

  public async goToBankOption(): Promise<void> {
    await this.bankOption.click();
  }

}
