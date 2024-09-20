const { expect, defineConfig, test } = require('@playwright/test');

class AmazonHomePage {
  constructor(page) {
    this.page = page;
  }

  async loginToTheApp()
  {
    // we are making use of baseURL configuration from playwright.config.js
    await this.page.goto('/')
  }


  async search(searchTerm) {

    await this.loginToTheApp();

    
    if ( !searchTerm)
      {
          await test.skip(true, "Search term should not be empty")
      }
    const searchInput = await this.page.locator('#twotabsearchtextbox');
    await searchInput.fill(searchTerm);
    await searchInput.press('Enter');

  }
}

module.exports = AmazonHomePage;