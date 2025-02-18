import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { firefox, Browser, Page } from "playwright";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await firefox.launch({ headless: false });
  const context = await browser.newContext();
  await context.addCookies([
    {
      name: "OptanonAlertBoxClosed",
      value: "true",
      domain: "www.vueling.com",
      path: "/",
    },
    {
      name: "cookieConsent",
      value: "accepted",
      domain: "www.vueling.com",
      path: "/",
    },
    {
      name: "OptanonAlertBoxClosed",
      value: "true",
      domain: "tickets.vueling.com",
      path: "/",
    },
    {
      name: "cookieConsent",
      value: "accepted",
      domain: "tickets.vueling.com",
      path: "/",
    },
  ]);
  page = await context.newPage();
  this.page = page;
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});
