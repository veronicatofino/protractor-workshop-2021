import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private nextStep: ElementFinder;

  constructor () {
    this.nextStep = $('#center_column > form > p > button > span');
  }

  public async goToShippingStepPage(): Promise<void> {
    await this.nextStep.click();
  }
}
