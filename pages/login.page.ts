import { browser } from "protractor";
import { PageObject } from "./page";

export class LoginPageObject extends PageObject {

  getUsernameBox() { return browser.$("input[formcontrolname='username'"); }
  getPasswordBox() { return browser.$("input[formcontrolname='password']"); }
  getLoginButton() { return browser.$("button[type='submit']"); }

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