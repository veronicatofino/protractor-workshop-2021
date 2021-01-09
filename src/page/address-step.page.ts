import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private nextStep: ElementFinder;

  constructor () {
    this.nextStep = $('.cart_navigation > button');
  }

  public async goToShippingStepPage(): Promise<void> {
    await this.nextStep.click();
  }
}
