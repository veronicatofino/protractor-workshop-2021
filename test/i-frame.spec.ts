import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a Tools QA frames page', () => {
  const newHeight: number = 50;
  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
  });

  describe('When want to change height of Iframe 1', async () => {
    const iFramePage: IFramePage = new IFramePage();
    beforeAll(async () => {
      iFramePage.setFormFrameHeight(newHeight);
    });

    it('Then the height must be changed', async () => {
      await expect(iFramePage.getFormFrameHeight()).toBe(newHeight);
    });
  });
});
