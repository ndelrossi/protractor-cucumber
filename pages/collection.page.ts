import { PageObject } from "./page";
import { expect } from "chai";

export class CollectionPageObject extends PageObject {
  
  constructor () {
    super();
  }

  getPage()          { return this.browser.element(this.by.tagName('bc-collection-page')); }
  getAddBookButton() { return this.browser.element(this.by.partialButtonText("Add Book to Collection")); }
  
  async open() {
    super.open('#/books');
  }

  // Not a good assertion. Just for testing.
  async assertBookInCollection(bookName: string) {
    await this.browser.sleep(1000);
    let bookNames = await this.browser.element(this.by.tagName('bc-book-preview-list')).getText();
    expect(bookNames).to.contain(bookName);
  }
  
}
