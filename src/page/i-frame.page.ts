import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private iFrame1: ElementFinder;

  constructor() {
    this.iFrame1 = $('#frame1');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iFrame1);
  }

  public async getFormFrameHeight(): Promise<number> {
    return parseInt((await this.iFrame1.getAttribute('height')), 0);
  }
}
