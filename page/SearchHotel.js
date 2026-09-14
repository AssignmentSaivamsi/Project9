 export class SearchHotel {
        constructor (page) {
            this.page = page
            this.title = page.locator('//td[@class="login_title"]')
            this.location = page.locator('//select[@name="location"]')
            this.hotels = page.locator('//select[@id="hotels"]')
            this.roomtype=page.locator('//select[@id="room_type"]')
            this.rooms=page.locator('//select[@id="room_nos"]')
            this.checkin=page.locator('//input[@id="datepick_in"]')
            this.checkout= page.locator('//input[@id="datepick_out"]')
            this.adultroom=page.locator('//select[@id="adult_room"]')
            this.childrenroom=page.locator('//select[@id="child_room"]')
            this.search=page.locator('//input[@id="Submit"]')
        }
        async visitUrl(){
        await this.page.goto('https://adactinhotelapp.com/index.php')
        }
        async selectlocation(){
            await this.location.selectOption({value:"Paris"})
        }
        async selecthotels(){
            await this.hotels.selectOption({value:"Hotel Sunshine"})
        }
        async selectroomtype(){
            await this.roomtype.selectOption({value:"Double"})
        }
        async selectrooms(){
            await this.rooms.selectOption({value:"3"})
        }
        async entercheckin(){
            await this.checkin.fill("24/09/2026")
        }
        async entercheckout(){
            await this.checkout.fill("25/09/2026")
        }
        async selectadultroom(){
            await this.adultroom.selectOption({value:"2"})
        }
        async selectchildrenroom(){
            await this.childrenroom.selectOption({value:"2"})
        }
        async searchbutton(){
            await this.search.click()
        }
 

    }