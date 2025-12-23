
import { test } from "../fixture/fixture";
import { testData } from "./testData/testData";


test ('E2E', async({page, loginPage,productPage,cartPage,checkoutInfoPage,checkoutOverviewPage,checkoutCompletePage,})=>{
    
     await page.goto(testData.urls.baseUrl);
     await loginPage.enterUsername(testData.users.validUser.username);
     await loginPage.enterPassword(testData.users.validUser.password);
     await loginPage.takeScreenshot('./pages/screenshots/loginPage.png');
     await loginPage.clickonLoginButton();
     await productPage.clickonAddToCartBtn();
          await productPage.takeScreenshot('./pages/screenshots/productPage.png');

     await productPage.clickOnCartBtn();
     



await cartPage.expectLoaded();
await cartPage.takeScreenshot('./pages/screenshots/cartPage.png');
await cartPage.checkout();
await cartPage.takeScreenshot('./pages/screenshots/cartPage.png');


await checkoutInfoPage.expectLoaded();
await checkoutInfoPage.fill( testData.checkoutInfo.firstName,
    testData.checkoutInfo.lastName,
    testData.checkoutInfo.postalCode);
    await checkoutInfoPage.takeScreenshot('./pages/screenshots/checkoutInfoPage.png');
await checkoutInfoPage.continue();
await checkoutInfoPage.takeScreenshot('./pages/screenshots/checkoutInfoPage.png');
//await checkoutInfo.cancel();

await checkoutOverviewPage.expectLoaded();
await checkoutOverviewPage.takeScreenshot('./pages/screenshots/checkoutOverviewPage.png');
await checkoutOverviewPage.expectTotalsVisible();
await checkoutOverviewPage.finish();
await checkoutOverviewPage.takeScreenshot('./pages/screenshots/checkoutOverviewPage.png');
//await checkoutOverview.cancel();

await checkoutCompletePage.expectLoaded();
await checkoutCompletePage.takeScreenshot('./pages/screenshots/checkoutCompletePage.png');
await checkoutCompletePage.backToInventory();
await checkoutCompletePage.takeScreenshot('./pages/screenshots/checkoutCompletePage.png');

  

})