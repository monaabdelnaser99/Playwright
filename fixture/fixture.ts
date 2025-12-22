import { test as baseTest } from '@playwright/test';
import LoginPage from '../pages/loginPage/loginPage';
import ProductPage from '../pages/productPage/productPage';
import CartPage from '../pages/cartPage/cartPage';
import CheckoutInfoPage from '../pages/checkoutInfoPage/checkoutInfoPage';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage/checkoutOverviewPage';
import CheckoutCompletePage from '../pages/checkoutCompletePage/checkoutCompletePage';
import InventoryPage from '../pages/inventorypage/inventoryPage';


type pages={
    loginPage: LoginPage;
    productPage: ProductPage;
   // header: Header;
    //burgerMenu: BurgerMenu;
    inventoryPage: InventoryPage;
    //productDetailsPage: ProductDetailsPage;
    cartPage: CartPage;
    checkoutInfoPage: CheckoutInfoPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutCompletePage: CheckoutCompletePage;
    //footer: Footer;
}

const testPages = baseTest.extend<pages>({
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));
    },
    productPage: async({page}, use)=>{
        await use(new ProductPage(page));
    },
   // header: async({page}, use)=>{
       // await use(new Header(page));
    //},
   // burgerMenu: async({page}, use)=>{
       // await use(new BurgerMenu(page));
   // },
    inventoryPage: async({page}, use)=>{
        await use(new InventoryPage(page));
    },
    //productDetailsPage: async({page}, use)=>{
      //  await use(new ProductDetailsPage(page));
   // },
    cartPage: async({page}, use)=>{
        await use(new CartPage(page));
    },
    checkoutInfoPage: async({page}, use)=>{
        await use(new CheckoutInfoPage(page));
    },
    checkoutOverviewPage: async({page}, use)=>{
        await use(new CheckoutOverviewPage(page));
    },
    checkoutCompletePage: async({page}, use)=>{
        await use(new CheckoutCompletePage(page));
    },
   // footer: async({page}, use)=>{
       // await use(new Footer(page));
   // },
})

export const test = testPages;
export const expect = testPages.expect;