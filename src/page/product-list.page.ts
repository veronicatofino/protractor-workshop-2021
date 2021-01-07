import { $, ElementFinder } from 'protractor';

export class ProductsListPage {
  private tShirt: ElementFinder;

  constructor () {
    this.tShirt = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectTShirt(): Promise<void> {
    await this.tShirt.click();
  }
}
