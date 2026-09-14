import {test, expect} from '@playwright/test'
test('webTable Handling', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
    //Row-data
   const rowData= await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
   //console.log(rowData)
 await rowData.forEach(value => console.log(value))
   await expect (rowData).toEqual([
    
  'Tiger Nixon',
  'System Architect',
  'Edinburgh',
  '61',
  '2011/04/25',
  '$320,800'

   ])

await expect(rowData).toContain("Tiger Nixon")

//Column-Data
const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[3]').allTextContents()
await expect(columnData).toContain('Tokyo')
//Single-Data
const singleData = await page.locator('//table[@id="table02"]//tbody//tr[4]//td[3]').textContent()
await expect(singleData).toEqual('Edinburgh')


})
