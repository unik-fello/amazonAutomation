const { expect, test } = require('@playwright/test');
// const { expect, defineConfig, test } = require('@playwright/test');

let page;
class AmazonHomePage {

  constructor(homePage) {
    page = homePage;
  }
  async loginToTheApp() {
    // we are making use of baseURL configuration from playwright.config.js
    await page.goto('/')

    // Validation for the page title with regex
    await expect(page, "The page title doesn't contain the word 'Amazon.in'").toHaveTitle(/Amazon\.in/)
  }


  async search(searchTerm) {

    await this.loginToTheApp();

    // validation to check if the search term i sempty 
    if (!searchTerm) {
      await test.skip(true, "Search term should not be empty")
    }
    const searchInput = await page.locator('#twotabsearchtextbox');
    await searchInput.fill(searchTerm);
    await searchInput.press('Enter');
  }
}

module.exports = AmazonHomePage;