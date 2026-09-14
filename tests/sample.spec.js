// x-path-----> Locator 


import {test} from '@playwright/test'

test('Instagram Website', async ({page}) => {
    await page.goto('https://www.instagram.com/?hl=en')
   await page.locator('//input[@name="email"]').fill('saivamsi@gmail.com')
    await page.locator ('//input[@name="pass"]').fill('password3456')
    await page.locator('//span [text()="Log in"]').click()
    

})