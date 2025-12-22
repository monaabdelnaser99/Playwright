import { Locator } from "@playwright/test";
import BasePage from "../basePage";

export default class ProductPage extends BasePage{
    private readonly SauceLabsBackpackAddToCartBtn = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');
    private readonly CartBtn = this.page.locator('[id="shopping_cart_container"]');
     async clickonAddToCartBtn(){
        await this.clickonElement(this.SauceLabsBackpackAddToCartBtn);

     }
     async clickOnCartBtn(){
        await this.clickonElement(this.CartBtn) 
      }
     }

