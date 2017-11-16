import { browser, Config } from "protractor";

export const config: Config = {

  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: false,

  baseUrl: "http://localhost:4200",

  capabilities: {
    browserName: "chrome",
  },

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: [
    "../../features/*.feature",
  ],

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: ["../../step-definitions/*.ts", "../../support/*.ts"],
    strict: true
  }

};
