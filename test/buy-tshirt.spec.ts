import { browser } from 'protractor';
import { MenuContentPage, ProductsListPage,
        ProductAddedPage, SummaryStepPage,
        SignInStepPage, AddressStepPage,
        ShippingStepPage, PaymentStepPage,
        BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Given a shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When want to buy a T Shirt', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productsListPage: ProductsListPage = new ProductsListPage();
    const productAddedPage: ProductAddedPage = new ProductAddedPage();
    const summaryPage: SummaryStepPage = new SummaryStepPage();
    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      await productsListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productAddedPage.goToSummaryStepPage();
      await summaryPage.goToSignInStepPage();
    });

    describe('And login to the page', () => {
      const signInPage: SignInStepPage = new SignInStepPage();
      beforeAll(async () => {
        await signInPage.goToAddressStepPage('vtofino@gmail.com', 'WorkshopProtractor');
      });

      describe('And select the default address', () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();
        beforeAll(async () => {
          await addressStepPage.goToShippingStepPage();
          await shippingStepPage.acceptTerms();
          await shippingStepPage.goToPaymentStepPage();
        });

        describe('And pay for the order with bank option', () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          beforeAll(async () => {
            await paymentStepPage.goToBankOption();
            await bankPaymentPage.goToOrderSummaryPage();
          });

          it('Then the buy should be complete', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await orderSummaryPage.checkOrderConfirmation();
          });
        });
      });
    });
  });
});
