const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  // const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage();
  const browserSession = browser.wsEndpoint();
  console.log(browserSession);
  browser.disconnect();

  const browser2 = await puppeteer.connect({
    browserWSEndpoint: browserSession,
  });
  const page2 = awaitbrowser2.newPage();
  await page2.goto("http://executeautomation.com/demosite/Login.html");
  await page2.type("[name=UserName]", "Adam");

  await browser.close();
})();
