const { expect, default: test } = require('@playwright/test');
const { CommonMethods } = require('../commonMethods')
const commonMethods = new CommonMethods();
const {ProductLocator }= require('../locators/productLocator');

class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart(productName) {

    const productEle = await this.page.locator(await commonMethods.createDynamicLocator(await ProductLocator.productResult, 'replaceText', productName.toLowerCase()));
    
    // storing the product name for verification purpose
    let productResultName = await productEle.textContent();
    productResultName = productResultName.trim();
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'), 
      productEle.click()
    ]);

    // verification of product name
    const productTitle = await newPage.locator(ProductLocator.productTitle).textContent();
    if (! await productTitle.includes(productResultName) )
    {
      test.fail(true, "The product title in the proudct page and the product clicked in the search result is not matched")
    }

    await newPage.click(ProductLocator.addToCartButton);
    
    // validation
    const cartCountElement = await newPage.locator('.nav-cart-count');
    const cartCount = await cartCountElement.textContent();
    expect(cartCount).toBe('1');
  }
}

module.exports = ProductPage;