export class LoginPage {
    constructor (page) {
        this.page = page
        this.username = page.locator('//input[@name="username"]')
        this.password = page.locator('//input[@name="password"]')
        this.button = page.locator('//input[@name="login"]')

    }
    async visitUrl(){
        await this.page.goto('https://adactinhotelapp.com/index.php')

    }
    async enterUsername(Unique_name){
        await this.username.fill(Unique_name)
    }
    async enterPassword(pw){
        await this.password.fill(pw)
    }
    async clickButton(){
        await this.button.click()
    }

   
}
