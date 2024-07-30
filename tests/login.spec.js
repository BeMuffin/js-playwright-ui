import { test, expect } from '@playwright/test'
import BasePage from '../pages/base.js'
import LoginPage from '../pages/login.js'

test('Login user', async ({ page }) => {
  const basePage = new BasePage(page)
  const loginPage = new LoginPage(page)

  await basePage.navigate('https://www.saucedemo.com/')
  await loginPage.loginUser('standard_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
