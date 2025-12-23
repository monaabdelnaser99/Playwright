import { test } from "../fixture/fixture";
import { testData } from "./testData/testData";


test ('Remove product', async({page, loginPage,productPage, inventoryPage})=>{
    
     await page.goto(testData.urls.baseUrl);
     await loginPage.enterUsername(testData.users.validUser.username);
     await loginPage.enterPassword(testData.users.validUser.password);
     await loginPage.takeScreenshot('./pages/screenshots/loginPage.png');
     await loginPage.clickonLoginButton();
      
     await inventoryPage.expectLoaded();
     await inventoryPage.takeScreenshot('./pages/screenshots/inventoryPage.png');
     await inventoryPage.addByName('Sauce Labs Backpack');
     await inventoryPage.takeScreenshot('./pages/screenshots/inventoryPage.png');
     await inventoryPage.removeByName("Sauce Labs Backpack");
     await inventoryPage.takeScreenshot('./pages/screenshots/inventoryPage.png');
});