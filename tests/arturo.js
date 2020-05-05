module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1920,1080)
        browser.url('https://discordapp.com/login')
    },
    after: browser => {
        browser.end()
    },

    'im not sorry': browser => {
        browser
            .setValue('input[type="email"]', 'irished24game@gmail.com')
            .setValue('input[type="password"]', 'pie4me')
            .click('button[type="submit"]')
            .useXpath()
            .click('(//div[@class="item-3HknzM item-PXvHYJ themed-OHr7kt"])[1]')
            .click('(//div[@class="listItemContents-95HL3L"])[1]')
            .useCss()
            .setValue('div[aria-label="Message @Arturo"]',['R', browser.Keys.ENTER])
            for (var x = 0; x <= 15; x++) {
                browser
                .setValue('div[aria-label="Message @Arturo"]',['e', browser.Keys.ENTER])
                .pause(500)
    
    
            }
    }
}