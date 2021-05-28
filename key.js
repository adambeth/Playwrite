const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();
  //   await page.goto("https://www.news24.com/");
  await page.goto("https://demosite.executeautomation.com/Login.html");
  await page.type("[name=UserName]", "Adam");

  await page.type("[name=Password]", "Adam");
  //   await page.click("[name=Login]", {
  //     button: "left",
  //     delay: 2000,
  //     clickCount: 2,
  //   });'
  const btn = await page.$("[name='Login']");
  //   await page.keyboard.press("Enter", { delay: 2000 });
  await page.click(btn);
  browser.close();
})();
