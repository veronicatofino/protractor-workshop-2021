import { browser } from 'protractor';
import { MenuContentPage, ProductsListPage,
        ProductAddedPage, SummaryStepPage,
        SignInStepPage, AddressStepPage,
        ShippingStepPage, PaymentStepPage,
        BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Given a clothing page', async () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });
  describe('When want to buy a T Shirt', async () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productsListPage: ProductsListPage = new ProductsListPage();
      const productAddedPage: ProductAddedPage = new ProductAddedPage();
      const summaryPage: SummaryStepPage = new SummaryStepPage();
      await menuContentPage.goToTShirtMenu();
      await productsListPage.selectTShirt();
      await productAddedPage.goToSummaryStepPage();
      await summaryPage.goToSignInStepPage();
    });
    describe('And login to the page', async () => {
      const signInPage: SignInStepPage = new SignInStepPage();
      await signInPage.goToAddressStepPage('vtofino@gmail.com', 'WorkshopProtractor');

      describe('And select the default address', async () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        await addressStepPage.goToShippingStepPage();
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();
        await shippingStepPage.acceptTerms();

        it('Then pay for the order with bank option', async () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          await paymentStepPage.goToBankOption();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          await bankPaymentPage.goToOrderSummaryPage();
          const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
          await orderSummaryPage.checkOrderConfirmation();
        });
      });
    });
  });
});
