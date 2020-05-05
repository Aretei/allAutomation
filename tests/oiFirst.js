var pageS = {}
var asset = require('../testAssets/daFirst')
module.exports = {
    beforeEach: browser => {
        pageS = browser.page.naDaFirst()
        pageS.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'Edit Employee': browser => {
        asset(pageS, 'Ruby Estrada', 
        {
            name: 'Macho Man',
            phone: '1234567890',
            title: 'OI BRUV'
        }, 
            'Lou White')

        
    }       
}