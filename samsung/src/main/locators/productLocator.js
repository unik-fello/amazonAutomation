export class ProductLocator{
    static productResult = "(//div[contains(@class,'s-search-results')]//div[contains(@class,'puisg-row')]//span[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'replaceText')])[1]";
    static addToCartButton = 'input[type="submit"][value="Add to Cart"]';
    static productTitle = "//span[@id='productTitle']";
}