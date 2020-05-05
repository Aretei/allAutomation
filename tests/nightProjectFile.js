
var nightPage = {}
module.exports = {
    beforeEach: browser => {
        nightPage = browser.page.nightProject()
        nightPage.resizeWindow(1366, 1366)
            .navigate()
    },
    after: browser => {
        nightPage.end()
    },
    'nightwatch': browser => {
        nightPage
            .headers()
            .assert()
            .expect()
            .useXpath()
            .click('@searchBar')
            .api.keys("loop", function (done) {
                nightPage.pause(500);
            });
        browser.keys([browser.Keys.ENTER])
        nightPage
        .waitForElementVisible('/html/body/section[5]/div[2]/div/div/div[2]/div[2]/div[2]/pre')
            .click('@searchBar')
            .api.keys("value", function (done) {
                nightPage.pause(500);
            });
        browser.keys([browser.Keys.ENTER])
        nightPage
        .waitForElementPresent('/html/body/section[1]/div[2]/div/div/div[2]/div/p[3]')
            .click('@searchBar')
            .api.keys("get text", function (done) {
                nightPage.pause(500);
            });
        browser.keys([browser.Keys.ENTER])
        nightPage
        .waitForElementVisible('/html/body/section[1]/div[2]/div/div/div[2]/div/p[2]')
    }
}