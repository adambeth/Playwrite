const puppeteer = require("puppeteer");
var path = require("path");
(async () => {
  // const path = "C//:Users//ABethlehem//UI//Browser";

  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: false,
  });
  // const browser = await puppeteer.launch({
  // headless: false,
  // product: "firefox",
  // slowMo: 50,
  // defaultViewport: null,
  // args: ["--start-maximized"],
  // });
  const page = await browser.newPage();
  // page.setViewport({
  //   width: 7840,
  //   height: 1440,
  // });

  // await Promise.all([
  //   page.coverage.startJSCoverage(),
  //   page.coverage.startCSSCoverage(),
  // ]);
  await page.setRequestInterception(true);
  page.on("request", (interceptedRequest) => {
    if (
      interceptedRequest.url().endsWith(".png") ||
      interceptedRequest.url().endsWith(".gif") ||
      interceptedRequest.url().endsWith(".jpg")
    )
      interceptedRequest.abort();
    else interceptedRequest.continue();
  });

  // await page.tracing.start({ path: "./section2/trace.json" });
  // await page.goto("https://demosite.executeautomation.com/Login.html");
  await page.goto("https://amazon.com");
  /*
  const name = await page.$("input[name='UserName']");
  const pass = await page.$("input[name='Password']");
  const btn = await page.$("input[name='Login']");
  const texts = await page.$$eval("p", (elements) =>
    elements.map((item) => item.textContent)
  );
*/
  // await name.type("Bob");
  // await pass.type("Help");
  // await console.log(texts);
  // await btn.click();
  // await page.tracing.stop();
  // const [jsCoverage, cssCoverage] = await Promise.all([
  //   page.coverage.stopJSCoverage(),
  //   page.coverage.stopCSSCoverage(),
  // ]);

  // let totalBytes = 0;
  // let usedBytes = 0;
  // const coverage = [...jsCoverage, ...cssCoverage];
  // for (const entry of coverage) {
  //   totalBytes += entry.text.length;
  //   for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
  // }

  // if (totalBytes === 0 || usedBytes === 0) {
  //   console.log("Nothing was used bitch 👾");
  // } else {
  //   console.log(`Bytes used 👾: ${(usedBytes / totalBytes) * 100}%`);
  // }
  browser.close();
})();
