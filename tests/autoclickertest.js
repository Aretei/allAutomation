module.exports = {
    beforeEach: browser => {
        browser.url('https://orteil.dashnet.org/cookieclicker/')
    },
    after: browser => {
        browser.pause()
    },
    'clicker': browser => {
        browser
            .pause(1000)
        for (var x = 0; x <= 7000; x++) {
            browser
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .click('#bigCookie')
                .pause(1000)


        }


    }
}
