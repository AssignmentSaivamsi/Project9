//Alert Handling(3 types)
//--->Simple alert- It will show only ok
//---> Confirmation alert -It will show both ok and cancel
//--> Prompt alert - prompt + ok + cancel

import {test} from '@playwright/test'

test('Alert Handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html#google_vignette')
    //For Simple alert
    await page.once('dialog', async(dialog)=>{
        await dialog.accept()
        console.log("Simple Alert :", dialog.message())
    })
        await page.locator('//button[@onclick="alertbox()"]').click()
        await page.waitForTimeout(6000)

        //For Confirmation alert
    await page.locator('(//a[@class="analystic"])[2]').click()


    await page.once('dialog', async(dialog)=>{
        await dialog.dismiss()
        console.log("Confirmation Alert :", dialog.message())

    })
    await page.locator('//button[@onclick="confirmbox()"]').click()
await page.waitForTimeout(6000)
    // For Prompt alert

    await page.locator('(//a[@class="analystic"])[3]').click()
    await page.once('dialog', async(dialog)=>{
        await dialog.accept('Hi Buddy')
        console.log("Prompt Alert:", dialog.message())
    })
    await page.locator('//button[@onclick="promptbox()"]').click()
    await page.waitForTimeout(6000)
})
