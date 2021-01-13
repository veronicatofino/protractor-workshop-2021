import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private bankOption: ElementFinder;

  constructor () {
    this.bankOption = $('.bankwire');
  }

  public async goToBankOption(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.bankOption), 4000);
    await this.bankOption.click();
  }
}
