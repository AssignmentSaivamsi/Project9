import {test} from '@playwright/test'
test('Alert Handling', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //for simple alert 
    await page.once('dialog', async(dialog)=>{
        await dialog.accept()
        console.log("Simple alert:", dialog.message())
    })
    await page.locator('//button[@onclick="myFunctionAlert()"]').click()

    // for confirmation alert 
    await page.once('dialog', async(dialog)=>{
        await dialog.dismiss()
        console.log("Confirmation alert:", dialog.message())
    })
    await page.locator('//button[@onclick="myFunctionConfirm()"]').click()
// for prompt alert 
await page.once('dialog', async(dialog)=>{
    await dialog.accept()
    console.log("Prompt alert:",dialog.message())
})
await page.locator('//button[@onclick="myFunctionPrompt()"]').click()
})
