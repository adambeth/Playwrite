"use strict";
const puppeteer = require("puppeteer");
describe("Running with Jest", () => {
  test("asyncTest", async () => {
    await page.goto("https://amazon.com");
  });
  test("asyncTest1", async () => {
    await page.goto("https://amazon.com");
  });
});
