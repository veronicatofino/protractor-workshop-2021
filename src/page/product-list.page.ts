import { $, ElementFinder, browser, ExpectedConditions  } from 'protractor';

export class ProductsListPage {
  private tShirt: ElementFinder;

  constructor () {
    this.tShirt = $('a[title="Add to cart"]');
  }

  public async selectTShirt(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirt), 4000);
    await this.tShirt.click();
  }
}
