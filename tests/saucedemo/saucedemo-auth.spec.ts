import { expect, test } from "../../fixture/fixture";
import inventoryPage from "./pages/inventorypage/inventoryPage";
import burgerMenu from "../pages/burgerMenu/burgerMenu";

test.describe('Authentication', () => {
  test('Standard Login and Logout', async ({ page, loginPage }) => {
    const inventory = new inventoryPage(page);
    const menu = new burgerMenu(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickonLoginButton();
    await inventory.expectLoaded();

    await menu.clickLogout();
    await expect(page.locator('[id="login-button"]')).toBeVisible();
  });

  test('Locked out user shows error and remains on login', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername('locked_out_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickonLoginButton();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[id="login-button"]')).toBeVisible();
  });

  test('Invalid credentials show error', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername('foo');
    await loginPage.enterPassword('bar');
    await loginPage.clickonLoginButton();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[id="login-button"]')).toBeVisible();
  });

  test('Empty fields validation', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    // both empty
    await loginPage.enterUsername('');
    await loginPage.enterPassword('');
    await loginPage.clickonLoginButton();
    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // only username
    await page.reload();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('');
    await loginPage.clickonLoginButton();
    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // only password
    await page.reload();
    await loginPage.enterUsername('');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickonLoginButton();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
