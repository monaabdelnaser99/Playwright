import { asyncWrapProviders } from "node:async_hooks";
import { test } from "../fixture/fixture";
import { testData } from "./testData/testData";


test ('cart information', async({page, loginPage,inventoryPage,cartPage,productPage})=>{
    
     await page.goto(testData.urls.baseUrl);
     await loginPage.enterUsername(testData.users.validUser.username);
     await loginPage.enterPassword(testData.users.validUser.password);
     await loginPage.takeScreenshot('./pages/screenshots/loginPage.png');
     await loginPage.clickonLoginButton();
     await inventoryPage.addByName('Sauce Labs Backpack');
            await inventoryPage.takeScreenshot('./pages/screenshots/inventoryPage.png');
            
     await productPage.clickOnCartBtn();

  await cartPage.expectLoaded();
 await cartPage.takeScreenshot('./pages/screenshots/cartPage.png');
   await cartPage.verifyProductDetails(
    'Sauce Labs Backpack',
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    '$29.99'
  );
  
});


