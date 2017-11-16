import { browser } from "protractor";
import { LoginPageObject } from "../pages/login.page";
import { expect } from "chai";

const { Given, When, Then } = require("cucumber");

const LoginPage: LoginPageObject = new LoginPageObject();

Given(/^I visit the homepage$/, async () => {
  await LoginPage.open();
});

When(/^I login with my credentials$/, async () => {
  await LoginPage.setUsername('test');
  await LoginPage.setPassword('test');
  await LoginPage.submit();
});
