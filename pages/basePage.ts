import { test, Locator, Page } from '@playwright/test';
export default class BasePage {
    protected readonly page:Page;
    constructor(page:Page){
this.page= page;

    }
    protected async clickonElement(element:Locator) {
         // await element.waitFor({ state: 'visible' });
           await element.click({ timeout: 10000 });
        
    }
    protected async enterTextToElement(element:Locator, text:string){
        await element.fill(text);
    }
    public async takeScreenshot(filePath: string) {
  await this.page.screenshot({ path: filePath });
}
 
    
}