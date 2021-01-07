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

  public async goToAddressStepPage(email: string, password: string): Promise<void> {
    await this.emailCred.sendKeys(email);
    await this.passwCred.sendKeys(password);
    await this.submitCreds.click();
  }
}
