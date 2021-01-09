import { $, ElementFinder, browser, ExpectedConditions  } from 'protractor';

export class ProductsListPage {
  private tShirt: ElementFinder;

  constructor () {
    this.tShirt = $('a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectTShirt(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirt), 4000);
    await this.tShirt.click();
  }
}
