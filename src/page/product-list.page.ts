import { $$, ElementFinder, browser, ExpectedConditions, ElementArrayFinder  } from 'protractor';

export class ProductsListPage {
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product_list li .product-container');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter((productItem: ElementFinder) =>
      productItem.$('.product-name').getText().then((name: string) => {
        return name === productName;
      })
    ).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const tShirt = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(tShirt), 4000);
    await tShirt.$('a.ajax_add_to_cart_button').click();
  }
}
