import {test } from "../fixture/fixture";
import { testData } from "./testData/testData";

test ('add product to cart and open cart', async({page, loginPage , productPage})=>{
    
     await page.goto(testData.urls.baseUrl);
     await loginPage.enterUsername(testData.users.validUser.username);
     await loginPage.enterPassword(testData.users.validUser.password);
     await loginPage.takeScreenshot('./pages/screenshots/loginPage.png');
     await loginPage.clickonLoginButton();
     await productPage.clickonAddToCartBtn();
          await productPage.takeScreenshot('./pages/screenshots/productPage.png');

     await productPage.clickOnCartBtn();
     
});

