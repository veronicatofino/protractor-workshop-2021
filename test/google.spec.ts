import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(() => {
      browser.get('http://google.com');
    });

    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Google');
    });
  });
});
