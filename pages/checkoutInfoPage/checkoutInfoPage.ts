import BasePage from "../basePage";
import { expect } from "@playwright/test";

export default class CheckoutInfoPage extends BasePage {
  private readonly title = this.page.locator('span.title', { hasText: 'Checkout: Your Information' });
  private readonly firstName = this.page.locator('[data-test="firstName"]');
private readonly lastName = this.page.locator('[data-test="lastName"]');
private readonly postalCode = this.page.locator('[data-test="postalCode"]');

  private readonly continueBtn = this.page.getByRole('button', { name: /^continue$/i });
  private readonly cancelBtn = this.page.getByRole('button', { name: /^cancel$/i });
  readonly error = this.page.locator('[data-test="error"]');

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }

  async fill(first: string, last: string, postal: string) {
    await this.enterTextToElement(this.firstName, first);
    await this.enterTextToElement(this.lastName, last);
    await this.enterTextToElement(this.postalCode, postal);
  }

  async continue() {
    await this.clickonElement(this.continueBtn);
  }

  async cancel() {
    await this.clickonElement(this.cancelBtn);
  }
}