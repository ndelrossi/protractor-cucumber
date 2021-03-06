import { browser, by } from "protractor";
import { CollectionPageObject } from "../pages/collection.page";
import { BrowsePageObject } from "../pages/browse.page";
import { ViewBookPageObject } from "../pages/view-book.page";
import { expect } from "chai";
const { Given, When, Then } = require("cucumber");

const CollectionPage: CollectionPageObject = new CollectionPageObject();
const BrowsePage:     BrowsePageObject = new BrowsePageObject();
const ViewBookPage:   ViewBookPageObject = new ViewBookPageObject();

When(/^I browse for the book "(.*)"$/, async (bookName) => {
  await BrowsePage.open();
  await browser.sleep(3000);
  await BrowsePage.searchBook(bookName);
});

When(/^I select the first result$/, async () => {
  await BrowsePage.selectFirstBook();
});

When(/^I add the book to my collection$/, async () => {
  await ViewBookPage.addBookToCollection();
});

Then(/^I will see "(.*)" in my collection$/, async (bookName) => {
  await CollectionPage.open();
  await CollectionPage.assertBookInCollection(bookName);
});

Then(/^I will see the My Collection page$/, async () => {
  await CollectionPage.getPage().isPresent();
});
