const { test } = require('@playwright/test');
const AmazonHomePage = require('../src/main/pages/homePage');
const ProductPage = require('../src/main/pages/productPage');
const searchTerms = require('../src/main/data/searchData.json');

test.describe('Amazon Automation', () => {
  
test('Search and add product to cart', async ({ page }) => {

  const amazonHomePage = new AmazonHomePage(page);
  const productPage = new ProductPage(page);

  await amazonHomePage.search(searchTerms.searchTerm);
  await productPage.addToCart(searchTerms.searchTerm);

})



})