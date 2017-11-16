import { browser, by } from "protractor";
import { PageObject } from "./page";

export class ViewBookPageObject extends PageObject {
  
  getAddBookButton() { return browser.element(by.partialButtonText('Add Book to Collection')); }
  
  async open() {
    super.open('#');
  }

  async addBookToCollection() {
    await this.getAddBookButton().click();
  }
  
}