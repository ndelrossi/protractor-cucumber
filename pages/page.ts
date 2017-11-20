import * as protractor from "protractor";

export class PageObject {
  
  async open(path) {
    await protractor.browser.get(path);
  }

}
