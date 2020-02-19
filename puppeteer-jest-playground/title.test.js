const puppeteer = require("puppeteer");
const titlePttern =
  "Aktuálne spravodajstvo na Slovensku a vo svete | Aktuality.sk";

describe("title match", () => {
  it("titles are equal", async () => {
    // APIs from jest-puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.aktuality.sk/");
    const title = await page.title();
    await browser.close();

    // API Jest
    expect(title).toEqual(titlePttern);

    console.log(title);
  }, 10000);
});
