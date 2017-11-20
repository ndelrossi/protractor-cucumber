import { PageObject } from "./page";

export class LoginPageObject extends PageObject {

  constructor () {
    super();
  }

  getUsernameBox() { return this.browser.$("input[formcontrolname='username'"); }
  getPasswordBox() { return this.browser.$("input[formcontrolname='password']"); }
  getLoginButton() { return this.browser.$("button[type='submit']"); }

  async open() {
    super.open('#/login');
  }

  async submit() {
    await this.getLoginButton().click();
  }

  async setUsername(name: string) {
    await this.getUsernameBox().sendKeys(name);
  }

  async setPassword(password: string) {
    await this.getPasswordBox().sendKeys(password);
  }

}