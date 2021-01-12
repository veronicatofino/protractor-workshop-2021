import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private nextStep: ElementFinder;

  constructor () {
    this.nextStep = $('[name="processAddress"]');
  }

  public async goToShippingStepPage(): Promise<void> {
    await this.nextStep.click();
  }
}
