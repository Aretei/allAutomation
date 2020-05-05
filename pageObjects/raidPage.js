var raidCommands = {

}
module.exports = {
    url: 'https://raid.report/pc/4611686018467250629',
    commands: [raidCommands],
    elements: {
        emblem: 'div[class="destiny-card-content"]',
        garden: {
            selector: '(//div[@class="col l3 m6 s12"])[1])',
            locateStrategy: 'xpath'
        },
        crown: {
            selector: '(//div[@class="col l3 m6 s12"])[2])',
            locateStrategy: 'xpath'
        },
        scourge: {
            selector: '(//div[@class="col l3 m6 s12"])[3])',
            locateStrategy: 'xpath'
        },
        lastWish: {
            selector: '(//div[@class="col l3 m6 s12"])[4])',
            locateStrategy: 'xpath'
        },
        spire: {
            selector: '(//div[@class="col l3 m6 s12"])[5])',
            locateStrategy: 'xpath'
        },
        eow: {
            selector: '(//div[@class="col l3 m6 s12"])[6])',
            locateStrategy: 'xpath'
        },
        levi: {
            selector: '(//div[@class="col l3 m6 s12"])[7])',
            locateStrategy: 'xpath'
        },
        fastGarden: {
            selector: '(//a[@href="/pgcr/5048982671"])[2]',
            locateStrategy: 'xpath'
        },
        fastCrown: {
            selector: '(//a[@href="/pgcr/4334624501"])[2]',
            locateStrategy: 'xpath'
        },
        fastScourge: {
            selector: '(//a[@href="/pgcr/3523006400"])[2]',
            locateStrategy: 'xpath'
        },
        fastWish: {
            selector: '(//a[@href="/pgcr/3622057883"])[2]',
            locateStrategy: 'xpath'
        },
        fastSpire: {
            selector: '(//a[@href="/pgcr/3622057883"])[2]',
            locateStrategy: '/pgcr/2006465664'
        },
        fastEaterOfWorlds: {
            selector: '(//a[@href="/pgcr/2091576948"])[2]',
            locateStrategy: 'xpath'
        },
        fastLevi: {
            selector: '(//a[@href="/pgcr/1897069869"])[2]',
            locateStrategy: 'xpath'
        },

    }
}