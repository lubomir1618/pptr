const puppeteer = require("puppeteer");
const screenshot = "./screenshots/billie.png";
const delay = 2000;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  /*
  await page.setViewport({
    width: 1280,
    height: 800
  })
  */
  await page.goto("https://youtube.com");
  await page.waitFor(delay);
  await page.type("#search", "Billie Eilish");
  await page.click("button#search-icon-legacy");
  await page.waitFor(delay);
  await page.screenshot({ path: screenshot, fullPage: true });

  const title = await page.title();
  await browser.close();
  console.log("youtube title: " + title);
})();
