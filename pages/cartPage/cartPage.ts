import { expect } from "@playwright/test";
import BasePage from "../basePage";

export default class CartPage extends BasePage {
    
 
  private readonly title = this.page.locator('span.title', { hasText: 'Your Cart' });
private readonly checkoutButton =
  this.page.locator('#checkout');

     private readonly cartItem = this.page.locator('.cart_item');

  private readonly itemName = this.cartItem.locator('.inventory_item_name');
  private readonly itemDesc = this.cartItem.locator('.inventory_item_desc');
  private readonly itemPrice = this.cartItem.locator('.inventory_item_price');
  private readonly itemImage = this.cartItem.locator('img.inventory_item_img');

  async verifyProductDetails(
    expectedName: string,
    expectedDescription: string,
    expectedPrice: string
  ) {
    await expect(this.itemName).toHaveText(expectedName);
    await expect(this.itemDesc).toHaveText(expectedDescription);
    await expect(this.itemPrice).toHaveText(expectedPrice);
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }
  

  async expectItemsPresent(names: string[]) {
    for (const n of names) {
      await expect(this.page.locator('.cart_item .inventory_item_name', { hasText: n })).toBeVisible();
    }

  }

  

  async remove(name: string) {
    const row = this.page.locator('.cart_item').filter({ has: this.page.getByText(name) });
    await this.clickonElement(row.getByRole('button', { name: /^remove$/i }));
  }

  async checkout() {
    await this.clickonElement(this.checkoutButton);
  }
}