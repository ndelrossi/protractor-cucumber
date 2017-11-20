import { PageObject } from "./page";

export class BrowsePageObject extends PageObject {

  constructor () {
    super();
  }

  getSearchBox() { return this.browser.$("input[placeholder='Search for a book']"); }
  
  async open() {
    super.open('#/books/find');
  }

  async waitForResults() {
    await this.browser.sleep(3000)
  }
  
  getFirstBookTitle() {
    return this.browser.element(this.by.tagName('bc-book-preview')).getText();
  }

  searchBook(bookName: string) {
    return this.getSearchBox().sendKeys(bookName);
  }

  async selectFirstBook() {
    await this.waitForResults();
    await this.browser.element(this.by.tagName('bc-book-preview')).click();
  }
  
}