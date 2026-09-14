//Dropdown methods 
//index--->{index:0}
//value--->{value:"1"}
//label--->{label:"orange"}

import {test} from '@playwright/test'

test('Dropdown Handling', async({page}) => {
   await page.goto('https://letcode.in/dropdowns/')
   //singleDropdown
   const singleDropdown = await page.locator('//select[@id="fruits"]')
   await singleDropdown.selectOption({label : "Mango"})
   const text = await singleDropdown.locator('option:checked').textContent()
   console.log(text)

   //multiDropDown
   const multiDropDown = await page.locator('//select[@id="superheroes]')
   await multiDropDown.selectOption([{index:2}, {value:"sg"}, {label: "Captain America"}])
   const multiText = await multiDropDown.locator('option:checked').allTextContents()
   console.log(multiText)
})