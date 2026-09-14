import {test} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotel } from '../page/SearchHotel'


test('POM', async({page})=>{
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername('SaiVamsi749')
    await login.enterPassword('sAIVAMSI@749')
    await login.clickButton()

const search = new SearchHotel(page)
await search.selectlocation()
await search.selecthotels()
await search.selectroomtype()
await search.selectrooms()
await search.entercheckin("24/09/2000")
await search.entercheckout("25/09/2000")
await search.selectadultroom()
await search.selectchildrenroom()
await search.searchbutton()

})
