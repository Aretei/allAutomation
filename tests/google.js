module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'google': browser => {
        browser
        .click('input[name="q"]')
        browser.keys("hi", function(done) {
            browser.pause(5000);
        });
    }
} 