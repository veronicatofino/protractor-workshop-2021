import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('When open Google Page', () => {
    beforeEach(async () => {
      await browser.get('http://google.com');
    });

    it('Then should have a title', async () => {
      await expect(browser.getTitle()).toEqual('Google');
    });
  });
});
