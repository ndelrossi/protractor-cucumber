import { browser, by } from "protractor";

export class PageObject {

  browser: any;
  by: any;
  
  constructor () {
    this.browser = browser;
    this.by = by;
  }
  
  async open(path) {
    await browser.get(path);
  }

}
