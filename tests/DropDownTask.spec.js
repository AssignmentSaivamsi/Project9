import {test} from '@playwright/test'

test('Dropdown Handling', async({page}) => {
   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator('//input[@placeholder="Enter Name"]').fill('saivamsi')

await page.locator('//input[@placeholder="Enter EMail"]').fill('saivamsi@gmail.com')
await page.locator('//input[@placeholder="Enter Phone"]').fill('9884583268')
await page.locator('//textarea[@id="textarea"]').fill('Perumbakkam')

await page.locator('//label[@for="male"]').click()

await page.locator('//label[@for="female"]').click()

await page.locator('//label[@for="sunday"]').check()
await page.locator('//label[@for="monday"]').check()
await page.locator('//label[@for="tuesday"]').check()
await page.locator('//label[@for="wednesday"]').check()
await page.locator('//label[@for="thursday"]').check()
await page.locator('//label[@for="friday"]').check()

//singledropdown
const singleDropdown = await page.locator('//select[@id="country"]')
await singleDropdown.selectOption({value : "germany"})
const text = await singleDropdown.locator('option:checked').textContent()
console.log(text)

//multiDropdown1
const multiDropDown = await page.locator('//select[@id ="colors"]')
await multiDropDown.selectOption([{index:2}, {value:"blue"}, {label: "Red"}])
const multiText = await multiDropDown.locator('option:checked').allTextContents()
console.log(multiText)


 //multiDropdown2
 const multiDropDown = await page.locator('//select[@id ="animals"]')
 await multiDropDown.selectOption([{index:2}, {value:"dog"}, {label: "Girafee"}])
 const multiText = await multiDropDown.locator('option:checked').allTextContents()
 console.log(multiText)























})