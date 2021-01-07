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
    await productsListPage.selectTShirt();
    await productAddedPage.goToSummaryStepPage();
    await summaryPage.goToSignInStepPage();

    await signInPage.goToAddressStepPage('vtofino@gmail.com', 'WorkshopProtractor');

    await addressStepPage.goToShippingStepPage();

    await shippingStepPage.acceptTerms();

    await shippingStepPage.goToPaymentStepPage();
    await paymentStepPage.goToBankOption();
    await bankPaymentPage.goToOrderSummaryPage();

    await orderSummaryPage.checkOrderConfirmation();
  });
});
