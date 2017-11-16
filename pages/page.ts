import { browser } from "protractor";

export class PageObject {

  async open(path) {
    await browser.get(path);
  }

}
