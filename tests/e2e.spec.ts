
import { test } from "../fixture/fixture";
import { testData } from "./testData/testData";


test ('E2E', async({page, loginPage,productPage,cartPage,checkoutInfoPage,checkoutOverviewPage,checkoutCompletePage,})=>{
    
     await page.goto(testData.urls.baseUrl);
     await loginPage.enterUsername(testData.users.validUser.username);
     await loginPage.enterPassword(testData.users.validUser.password);
     await loginPage.clickonLoginButton();
     await productPage.clickonAddToCartBtn();
     await productPage.clickOnCartBtn();
     



await cartPage.expectLoaded();
await cartPage.checkout();

await checkoutInfoPage.expectLoaded();
await checkoutInfoPage.fill( testData.checkoutInfo.firstName,
    testData.checkoutInfo.lastName,
    testData.checkoutInfo.postalCode);
await checkoutInfoPage.continue();
//await checkoutInfo.cancel();

await checkoutOverviewPage.expectLoaded();
await checkoutOverviewPage.expectTotalsVisible();
await checkoutOverviewPage.finish();
//await checkoutOverview.cancel();

await checkoutCompletePage.expectLoaded();
await checkoutCompletePage.backToInventory();

  

})