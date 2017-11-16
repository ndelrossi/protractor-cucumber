import { browser, by } from "protractor";
import { PageObject } from "./page";

export class BrowsePageObject extends PageObject {
  
  getSearchBox() { return browser.$("input[placeholder='Search for a book']"); }
  
  async open() {
    super.open('#/books/find');
  }

  async waitForResults() {
    await browser.sleep(3000)
  }
  
  getFirstBookTitle() {
    return browser.element(by.tagName('bc-book-preview')).getText();
  }

  searchBook(bookName: string) {
    return this.getSearchBox().sendKeys(bookName);
  }

  async selectFirstBook() {
    await this.waitForResults();
    await browser.element(by.tagName('bc-book-preview')).click();
  }
  
}