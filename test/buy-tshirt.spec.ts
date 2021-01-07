import { browser } from 'protractor';
import { MenuContentPage, ProductsListPage,
        ProductAddedPage, SummaryStepPage,
        SignInStepPage, AddressStepPage,
        ShippingStepPage, PaymentStepPage,
        BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productsListPage: ProductsListPage = new ProductsListPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const summaryPage: SummaryStepPage = new SummaryStepPage();
  const signInPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  it('Then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productsListPage.selectTShirt();
    await(browser.sleep(3000));
    await productAddedPage.goToSummaryStepPage();
    await(browser.sleep(3000));
    await summaryPage.goToSignInStepPage();
    await(browser.sleep(3000));

    await signInPage.goToAddressStepPage('vtofino@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.goToShippingStepPage();
    await(browser.sleep(3000));

    await shippingStepPage.acceptTerms();
    await(browser.sleep(3000));

    await shippingStepPage.goToPaymentStepPage();
    await(browser.sleep(3000));
    await paymentStepPage.goToBankOption();
    await(browser.sleep(3000));
    await bankPaymentPage.goToOrderSummaryPage();
    await(browser.sleep(3000));

    await orderSummaryPage.checkOrderConfirmation();
  });
});
