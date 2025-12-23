import BasePage from "../basePage";
import { expect } from "@playwright/test";

export default class ProductDetailsPage extends BasePage {
  static addToCart() {
    throw new Error("Method not implemented.");
  }
  static expectLoadedWith(arg0: string) {
    throw new Error("Method not implemented.");
  }
  private readonly backButton = this.page.getByRole('button', { name: /back to products/i });
  private readonly title = this.page.locator('.inventory_details_name_large');
  private readonly addButton = this.page.getByRole('button', { name: /add to cart/i });

  async expectLoadedWith(name: string) {
    await expect(this.title).toHaveText(name);
  }

  async addToCart() {
    await this.clickonElement(this.addButton);
  }

  async backToProducts() {
    await this.clickonElement(this.backButton);
  }
}
