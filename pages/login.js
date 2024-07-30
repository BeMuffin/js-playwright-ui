import BasePage from "./base.js"

export default class LoginPage  extends BasePage{
    constructor(page) {
        super(page)
        this.usernameInput = '#user-name'
        this.passwordInput = '#password'
        this.loginBtn = '#login-button'
    }

    async loginUser(username, password) {
        await this.page.fill(this.usernameInput, username)
        await this.page.fill(this.passwordInput, password)
        await this.page.click(this.loginBtn)
    }
}
