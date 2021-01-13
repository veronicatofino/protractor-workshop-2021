import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export interface IPersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
}

export class PersonalInformationPage {
  private formTitle: ElementFinder;
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sexField: ElementFinder;
  private experienceField: ElementFinder;
  private continentField: ElementFinder;
  private submitButton: ElementFinder;

  constructor () {
    this.formTitle = element(by.cssContainingText('h1', 'Selenium - Automation Practice Form'));
    this.firstNameField = element(by.css('[name="firstname"]'));
    this.lastNameField = element(by.css('[name="lastname"]'));
    this.submitButton = element(by.css('[name="submit"]'));
  }

  private async sexRadioButtonField(sex: string) {
    this.sexField = element(by.css(`[name="sex"][value="${sex}"]`));
    await this.sexField.click();
  }

  private async experienceRadioButtonField(years: string) {
    this.experienceField = element(by.css(`[name="exp"][value="${years}"]`));
    await this.experienceField.click();
  }

  private professionsCheckboxField(profession: string[]) {
    profession.forEach(async (item) => {
      await element(by.css(`[name="profession"][value="${item}"]`)).click();
    });
  }

  private toolsCheckboxField(tools: string[]) {
    tools.forEach(async (item) => {
      await element(by.css(`[name="tool"][value="${item}"]`)).click();
    });
  }

  private async continetComboBoxField(continent: string) {
    this.continentField = element(by.css('select[name="continents"]')).element(by.cssContainingText('option', `${ continent }`));
    await this.continentField.click();
  }

  private commandsComboBoxField(commands: string[]) {
    commands.forEach(async (item) => {
      await element(by.css('select[name="selenium_commands"]'))
      .element(by.cssContainingText('option', `${ item }`)).click();
    });
  }

  public async fillForm(personInfo: IPersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(personInfo.firstName);
    await this.lastNameField.sendKeys(personInfo.lastName);

    await this.sexRadioButtonField(personInfo.sex);
    await this.experienceRadioButtonField(personInfo.experience.toString());
    this.professionsCheckboxField(personInfo.profession);
    this.toolsCheckboxField(personInfo.tools);
    await this.continetComboBoxField(personInfo.continent);
    this.commandsComboBoxField(personInfo.commands);

  }

  public async submitForm(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.submitButton), 4000);
    await this.submitButton.click();
    await browser.driver.switchTo().alert().accept();
  }

  public async checkTitle(): Promise<void> {
    await expect((this.formTitle).getText()).toBe('Selenium - Automation Practice Form');
  }
}
