const puppeteer = require("puppeteer");
// const devices = require("puppeteer/DeviceDescriptors");
const iPhone = puppeteer.devices["iPhone 6"];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // await page.emulate(devices["iPhone 6"]);
  await page.emulate(iPhone);

  await page.goto("https://sme.sk");
  await page.screenshot({ path: "screenshots/sme.png", fullPage: false });

  await browser.close();
})();
