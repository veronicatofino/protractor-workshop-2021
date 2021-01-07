import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private nextStep: ElementFinder;

  constructor () {
    this.nextStep = $('.cart_navigation span');
  }

  public async goToSignInStepPage(): Promise<void> {
    await this.nextStep.click();
  }
}
