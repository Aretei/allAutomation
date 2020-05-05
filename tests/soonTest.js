var soo = {}
module.exports = {
    beforeEach: browser => {
        soo = browser.page.soonObject()
        soo.resizeWindow(1920,1080)
        soo.navigate()
    },
    after: browser => {
        soo.pause(2000)
        soo.end()
    },
    'test': browser => {
        soo
            .pause(2000)
            .setValue('@firstSearch','im.really.bad')
            .pause(2000)
            .click('@submit')
            .pause(3000)
            .expect.element('@rank').text.to.contain('PLATINUM III')
        soo
            .getText('@stats', function (stats) {
                console.log('getText result', stats.value)
            })
            .setValue('@secSearch', ['aretei', browser.Keys.ENTER])
            .expect.element('@rank').text.to.contain('GOLD II')
        soo
            .getText('@stats', function (mainStats) {
                console.log('getText result', mainStats.value)
            })
            
    }
}