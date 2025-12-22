import BasePage from "../basePage";

export default class BurgerMenu extends BasePage {
  private readonly openButton = this.page.getByRole('button', { name: /open menu/i });
  private readonly allItems = this.page.getByRole('link', { name: /^all items$/i });
  private readonly about = this.page.getByRole('link', { name: /^about$/i });
  private readonly logout = this.page.getByRole('link', { name: /^logout$/i });
  private readonly reset = this.page.getByRole('link', { name: /^reset app state$/i });

  async open() {
    await this.clickonElement(this.openButton);
  }

  async clickAllItems() {
    await this.open();
    await this.clickonElement(this.allItems);
  }

  async clickAbout() {
    await this.open();
    await this.clickonElement(this.about);
  }

  async clickLogout() {
    await this.open();
    await this.clickonElement(this.logout);
  }

  async resetAppState() {
    await this.open();
    await this.clickonElement(this.reset);
  }
}
