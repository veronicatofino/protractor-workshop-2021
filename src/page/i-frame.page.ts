import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private iFrame1: ElementFinder;
  private title: ElementFinder;

  constructor() {
    this.iFrame1 = $('#frame1');
    this.title = $('');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iFrame1);
  }

  public async getFormFrameHeight(): Promise<number> {
    return parseInt((await this.iFrame1.getAttribute('height')), 0);
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.iFrame1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public async getTextTtitle(): Promise<string> {
    return await this.title.getText();
  }
}
