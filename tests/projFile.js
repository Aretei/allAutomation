var proj = {}
var asset = require('../testAssets/projAsset')
module.exports = {
    beforeEach: browser => {
        proj = browser.page.projPage()
        proj.navigate()
    },

    after: browser => {
        proj.end()
    },
    'Zillow Project': browser => {
        proj
            .loginYo(asset[0])
            .searchYo(asset[0])
            .filterPrice(asset[0])
            .filterBeds()
            .filterHomeType()
            .lookAtHouses(asset[0])
            .changeFilterHomeType()
            .changeSaleType()
            .changePriceFilter(asset[1])
            .lookAtHouses(asset[1])
            .click('@savedHomes')
            .expect.element('@savedHomesCounter').text.to.contain(asset[1])

    }
}      