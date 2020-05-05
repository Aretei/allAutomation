var solo = {}
var asset = require('../testAssets/nzxtAsset')
module.exports = {
    beforeEach: browser => {
        solo = browser.page.nzxtObject()
        solo.resizeWindow(1920, 1080)
        solo.navigate()
    },
    after: browser => {
        browser.end()
    },
    'test': browser => {
        solo
            .signIn(asset)
            .lookAround()
            .makeBuild()
            .configureCheck()
            .checkout()
    }
}