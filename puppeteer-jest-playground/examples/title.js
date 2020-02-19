const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.sme.sk/");

  await page.setViewport({ width: 1920, height: 946 });

  await page.waitForSelector(
    ".title-left-panel > .js-pvt-container-title-selection-top > .media-body > .media-heading > .js-pvt-title"
  );
  await page.click(
    ".title-left-panel > .js-pvt-container-title-selection-top > .media-body > .media-heading > .js-pvt-title"
  );
  await page.waitFor(1000);

  const title = await page.title();

  console.log("title", title);

  await browser.close();
})();
