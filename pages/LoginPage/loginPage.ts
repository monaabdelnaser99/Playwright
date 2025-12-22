import BasePage from "../basePage";

export default class LoginPage extends BasePage{
    private readonly usernamefield = this.page.locator('[id="user-name"]');
    private readonly passwordfield = this.page.locator('[id="password"]');
    private readonly loginbtn = this.page.locator('[id="login-button"]');
     async enterUsername(p0: string){
        await this.enterTextToElement(this.usernamefield, "standard_user");
     }
      async enterPassword(p0: string){
        await this.enterTextToElement(this.passwordfield, "secret_sauce");
     }
     async clickonLoginButton(){
        await this.clickonElement(this.loginbtn);

     }

}