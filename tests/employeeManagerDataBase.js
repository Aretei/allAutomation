var oem ={}
var asset = require('../testAssets/emplodb')
module.exports = {
    beforeEach: browser => {
        oem = browser.page.emdb()
        oem.navigate()
    },
    after: browser => {
        oem.end()
    },
    'theTest': browser => {
        oem
            .addEmpTest(asset[0])
            .editEmpTest(asset[1])
            .deleteEmpTest(asset)

    }
}