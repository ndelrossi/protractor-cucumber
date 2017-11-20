import { PageObject } from "./page";

export class ViewBookPageObject extends PageObject {
  
  constructor () {
    super();
  }

  getAddBookButton() { return this.browser.element(this.by.partialButtonText('Add Book to Collection')); }
  
  async open() {
    super.open('#');
  }

  async addBookToCollection() {
    await this.getAddBookButton().click();
  }
  
}