import { browser, by } from "protractor";
import { PageObject } from "./page";
import { expect } from "chai";

export class CollectionPageObject extends PageObject {
  
  getPage()          { return browser.element(by.tagName('bc-collection-page')); }
  getAddBookButton() { return browser.element(by.partialButtonText("Add Book to Collection")); }
  
  async open() {
    super.open('#/books');
  }

  // Not a good assertion. Just for testing.
  async assertBookInCollection(bookName: string) {
    let bookNames = await browser.element(by.tagName('bc-book-preview-list')).getText();
    expect(bookNames).to.contain(bookName);
  }
  
}
