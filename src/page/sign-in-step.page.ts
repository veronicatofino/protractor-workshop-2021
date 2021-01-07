import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private submitCreds: ElementFinder;
  private emailCred: ElementFinder;
  private passwCred: ElementFinder;

  constructor () {
    this.emailCred = $('#email');
    this.passwCred = $('#passwd');
    this.submitCreds = $('#SubmitLogin > span');
  }

  public async goToAddressStepPage(): Promise<void> {
    await this.emailCred.sendKeys('vtofino@gmail.com');
    await this.passwCred.sendKeys('WorkshopProtractor');
    await this.submitCreds.click();
  }
}
