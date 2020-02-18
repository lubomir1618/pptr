const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("screen match", () => {
  it("screens are equal", async () => {
    // APIs from jest-puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.aktuality.sk/");

    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot({});

    await browser.close();
  }, 10000);
});
