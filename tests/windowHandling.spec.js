import {test} from '@playwright/test'

test('window handling', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 16')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page'),page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone 16 128 GB: 5G Mobile Phone with Camera Control")]')])
await newPage.waitForLoadState()
const title = await newPage.title()
console.log(title)
})