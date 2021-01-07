import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private serviceTerms: ElementFinder;
  private nextStep: ElementFinder;

  constructor () {
    this.serviceTerms = $('#cgv');
    this.nextStep = $('#form > p > button > span');
  }

  public async acceptTerms(): Promise<void> {
    await this.serviceTerms.click();
  }

  public async goToPaymentStepPage(): Promise<void> {
    await this.nextStep.click();
  }
}
