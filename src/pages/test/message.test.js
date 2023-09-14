import puppeteer from "puppeteer";

describe("login page", () => {
  it("should display the message page", async () => {
    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();
    await page.goto("http://localhost:5173/message");

    await page.waitForSelector("#page-title");
    const pageTitle = await page.$eval("#page-title", (e) => e.innerHTML);
    expect(pageTitle).toMatch("Message");

    await browser.close();
  });
});
