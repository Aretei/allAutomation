module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'Searching Google': browser => {
        browser
            .setValue('input[name="q"]', ['Perez', browser.Keys.ENTER])
            .pause(10000)
    }
}