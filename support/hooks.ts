const { After } = require("cucumber");
import { browser } from "protractor";

After(async function(scenario) {
  await browser.get('/logout');
});
