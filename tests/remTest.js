var rem = {}
var googles = ["i did it", "ubisoft"]
module.exports = {
    beforeEach: browser => {
        rem = browser.page.remObject()
        rem. resizeWindow(1920,1080)
        rem.navigate()
    },
    after: broswer => {
        rem.pause(5000)
        rem.end()
    },
    'remTest': browser => {
        rem
            .setValue('@search', googles[0])
            .pause(2000)
            .click('@searchGoogle')
            .expect.element('@didItResult').text.to.contain('Raja Kumari - I Did It - YouTube')
        rem
            .clearValue('@search')
            .setValue('@search', googles[1])
            .click('@searchButton')
            .click('@ubisoft')
        rem
            .waitForElementVisible('@mainDisplay', [false])  
            .click('@moreGames')
            .click('@siege')
            .waitForElementVisible('@siegeMain', [false])
            return this
    }
}