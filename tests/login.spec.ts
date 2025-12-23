import { test } from "../fixture/fixture";
import { testData } from "./testData/testData";


test('User can login', async ({ page , loginPage }) => {
        await page.goto(testData.urls.baseUrl);
  await loginPage.enterUsername(testData.users.validUser.username);
      await loginPage.enterPassword(testData.users.validUser.password);
      await loginPage.takeScreenshot('./pages/screenshots/loginPage.png');
      await loginPage.clickonLoginButton();
});
