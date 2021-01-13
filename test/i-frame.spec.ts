import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a Tools QA frames page', () => {
  const newHeight: number = 50;
  let height: number;
  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
  });

  describe('When want to change height of Iframe 1', async () => {
    const iFramePage: IFramePage = new IFramePage();
    beforeAll(async () => {
      height = await iFramePage.getFormFrameHeight();
      await iFramePage.setFormFrameHeight(newHeight);
    });

    it('Then the height must be changed', async () => {
      expect(await iFramePage.getFormFrameHeight()).not.toBe(height);
    });
  });
});
