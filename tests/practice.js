// DOESNT WORK


let myClass
var page = {}
module.exports = {
    beforeEach: browser => {
        page = browser.page.pracPage()
        page.resizeWindow(1920,1080)
    },
    after: browser => {
        page.end()
    },

    'test': browser => {
        page
            .getAt()
            .click(`(//div[@class="${myClass}])[1]`)
    }
}