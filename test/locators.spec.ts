import { browser } from 'protractor';
import { PersonalInformationPage, IPersonalInformation } from '../src/page';

describe('Given a page with a form', async () => {
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('When want to fill the form', async () => {
    const personalData: IPersonalInformation = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      profilePicture: '../../../resources/foxPic.jpg',
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    };
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeAll(async () => {
      await personalInformationPage.fillForm(personalData);
    });

    describe('And then the photo should be loaded', () => {
      beforeAll(async () => {
        await personalInformationPage.checkFileLoaded('foxPic.jpg');
      });

      describe('And finally click the submit button ', async () => {
        beforeAll(async () => {
          await personalInformationPage.submitForm();
        });

        it('Then the form should be uploaded', async () => {
          await personalInformationPage.checkTitle();
        });
      });
    });
  });
});
