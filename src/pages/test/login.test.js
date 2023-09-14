import puppeteer from "puppeteer";

describe("login page", () => {
  it("should display the login form", async () => {
    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();
    await page.goto("http://localhost:5173/");
    await page.waitForSelector("#username");
    await page.type("#username", "test");
    await page.type("#password", "test");
    await page.click("#btn-submit");
    await page.waitForSelector("#page-title");
    const pageTitle = await page.$eval("#page-title", (e) => e.innerHTML);

    expect(pageTitle).toMatch("Logged In");

    await browser.close();
  });
});
