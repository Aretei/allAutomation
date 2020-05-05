var nzxtCommands = {
    signIn: function (asset) {
        this
            .click('@signIn')
            .setValue('@emailInput', asset.email)
            .setValue('@passInput', asset.pass)
            .click('@submitSignIn')
        return this
    },
    lookAround: function() {
        this
            .pause(3000)
            .click('@starter')
            .waitForElementVisible('@starterHeading')
            .click('@streamer')
            .waitForElementVisible('@streamerHeader')
            .pause(3000)
            .click('@creator')
            .waitForElementVisible('@creatorHeader')
            .pause(3000)
            .click('@home')
            return this
    },
    makeBuild: function () {
        this
            .pause(5000)
            .click('@getStarted')
            .click('@battleV')
            .click('@battleOne')
            .click('@pickPrice')
            .pause(2000)
            .click('@priceFour')
        return this
    },
    configureCheck: function () {
        this
            .pause(3000)
            .click('@configure')
            .waitForElementVisible('@configCase')
            .pause(1000)
            .expect.element('@bestCaseBody').text.to.contain('NZXT H510 Elite')
        this
            .expect.element('@bestCaseBody').text.to.contain('SELECTED')
        this
            .click('@configCooling')
            .expect.element('@bestCoolingBody').text.to.contain('NZXT Kraken X62')
        this
            .expect.element('@bestCoolingBody').text.to.contain('SELECTED')
        this
            .click('@configMother')
            .expect.element('@bestMotherBody').text.to.contain('ASUS ROG Maximus XI Hero')
        this
            .expect.element('@bestMotherBody').text.to.contain('SELECTED')
        this
            .click('@configGpu')
            .expect.element('@bestGpuBody').text.to.contain('GeForce RTX 2080 SUPER')
        this
            .expect.element('@bestGpuBody').text.to.contain('SELECTED')
        this
            .pause(2000)
            .click('@configCpu')
            .expect.element('@bestCpuBody').text.to.contain('Intel Core i9-9900K 8-Core 3.6 GHz')
        this
            .expect.element('@bestCpuBody').text.to.contain('SELECTED')
        this
            .click('@configPower')
            .expect.element('@bestPowerBody').text.to.contain('NZXT E850 Gold Digital PSU')
        this
            .expect.element('@bestPowerBody').text.to.contain('SELECTED')
        this
            .click('@configRam')
            .expect.element('@bestRamBody').text.to.contain('G. Skill TridentZ RGB 16GB (2 x 8GB) 3600MHz')
        this
            .expect.element('@bestRamBody').text.to.contain('16 GB')
        this
            .click('@configStorage')
            .expect.element('@bestStorageBody').text.to.contain('Samsung 970 EVO Plus 250GB')
        this
            .expect.element('@bestStorageBody').text.to.contain('1 TB')
        this
        return this
    },
    checkout: function () {
        this
            .click('@reviewCheckout')
            .pause(2000)
            .getText('@finalCase', function (box) {
                console.log('getText result', box.value)
            })
            .getText('@finalGpu', function (graphic) {
                console.log('getText result', graphic.value)
            })
            .getText('@finalCpu', function (pro) {
                console.log('getText result', pro.value)
            })
            .getText('@finalCool', function (cool) {
                console.log('getText result', cool.value)
            })
            .getText('@finalMother', function (mom) {
                console.log('getText result', mom.value)
            })
            .getText('@finalRam', function (ram) {
                console.log('getText result', ram.value)
            })
            .getText('@finalSsd', function (save) {
                console.log('getText result', save.value)
            })
            .getText('@finalPower', function (pow) {
                console.log('getText result', pow.value)
            })
            .getText('@finalPrice', function (result) {
                console.log('getText result', result.value)
            })
            .getText('@shipDate', function (date) {
                console.log('getText result', date.value)
            })
    },
}
module.exports = {
    url: 'https://www.letsbld.com/',
    commands: [nzxtCommands],
    elements: {
        getStarted: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div[2]/a',
            locateStrategy: 'xpath'
        },
        battleV: 'img[data-ref="31"]',
        battleOne: 'img[data-ref="8"]',
        pickPrice: 'a[id="link-step2"]',
        priceOne: 'a[id="price1"]',
        priceTwo: 'a[id="price2"]',
        priceThree: 'a[id="price3"]',
        priceFour: 'a[id="price4"]',
        configure: 'button[class="btn select-build__button select-build__button--purple"]',
        reviewCheckout: 'a[class="checkout-btn btn btn-purple inline"]',
        configCase: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/ul[1]/li[2]/a',
            locateStrategy: 'xpath'
        },
        configCooling: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/ul[1]/li[3]/a',
            locateStrategy: 'xpath'
        },
        configMother: 'a[id="motherboard-tab-button"]',
        configGpu: 'a[id="gpu-tab-button"]',
        configCpu: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/ul[1]/li[6]/a',
            locateStrategy: 'xpath'
        },
        configPower: 'a[id="psu-tab-button"]',
        configRam: 'a[id="ram-tab-button"]',
        configStorage: 'a[id="storage-tab-button"]',
        configRgb: 'a[id="rgbs-tab-button"]',
        configAccessories: 'a[id="extras-tab-button"]',
        configPeriph: 'a[id="peripherals-tab-button"]',
        configMonitor: 'a[id="monitor-tab-button"]',
        configColor: 'a[id="color-tab"]',
        configSoftware: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[3]/ul[2]/li[7]/a',
            locateStrategy: 'xpath'
        },
        moreConfig: 'a[class="btn btn-green next"]',
        bestCase: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[1]/div/div/div[1]/div[4]/div[2]/div/div/a',
            locateStrategy: 'xpath'
        },
        bestCooling: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div[1]/div[3]/div[2]/div/div/a',
            locateStrategy: 'xpath'
        },
        bestMother: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[3]/div/div/div/div[5]/div[2]/div/div/a',
            locateStrategy: 'xpath'
        },
        bestGpu: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[4]/div/div/div/div[5]/div[2]/div/div/a',
            locateStrategy: 'xpath'
        },
        bestCpu: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div/div[5]/div[2]/div/div/a',
            locateStrategy: 'xpath'
        },
        bestPower: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[6]/div/div/div/div[5]/div[2]/div/div/a',
            locateStrategy: 'xpath'
        },
        bestRam: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[7]/div/div/div/div[4]/div[2]/div/div/div[2]/button',
            locateStrategy: 'xpath'
        },
        ramOption: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[7]/div/div/div/div[4]/div[2]/div/div/div[2]/ul',
            locateStrategy: 'xpath'
        },
        bestStorage: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[8]/div/div/div[1]/div[3]/div[2]/div/div/div[2]/button',
            locateStrategy: 'xpath'
        },
        storageOption: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[8]/div/div/div[1]/div[3]/div[2]/div/div/div[2]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        configBack: {
            selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div[3]/ul[2]/li[1]/a',
            locateStrategy: 'xpath'
        },
        headerWhat: {
            selector: '/html/body/div[1]/div/div[2]/div[4]/nav/div[2]/div[2]/ul[1]/li[1]/a',
            locateStrategy: 'xpath'
        },
        headerStarter: {
            selector: '/html/body/div[1]/div/div[2]/div[4]/nav/div[2]/div[2]/ul[1]/li[2]/a',
            locateStrategy: 'xpath'
        },
        headerStream: {
            selector: '/html/body/div[1]/div/div[2]/div[4]/nav/div[2]/div[2]/ul[1]/li[3]/a',
            locateStrategy: 'xpath'
        },
        headerCreator: {
            selector: '/html/body/div[1]/div/div[2]/div[4]/nav/div[2]/div[2]/ul[1]/li[4]/a',
            locateStrategy: 'xpath'
        },
        headerReview: {
            selector: '/html/body/div[1]/div/div[2]/div[4]/nav/div[2]/div[2]/ul[1]/li[5]/a',
            locateStrategy: 'xpath'
        },
        headerFaq: {
            // leads to separate page
            selector: '/html/body/div[1]/div/div[2]/div[4]/nav/div[2]/div[2]/ul[1]/li[7]/a',
            locateStrategy: 'xpath'
        },
        signIn: {
            selector: '/html/body/div[1]/div/div[1]/div[4]/nav/div[1]/div/ul[2]/li[1]/a',
            locateStrategy: 'xpath'
        },
        emailInput: 'input[class="form-control input"]',
        passInput: 'input[class="form-control input-group js-input-password input"]',
        submitSignIn: {
            selector: '/html/body/div[1]/div/div[1]/div[8]/div/div[2]/form/div/div/div/div[2]/div[3]/button',
            locateStrategy: 'xpath'
        },
        bestCaseBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[1]/div/div/div[1]/div[4]',
            locateStrategy: 'xpath'
        },
        bestCoolingBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div[1]/div[4]',
            locateStrategy: 'xpath'
        },
        bestMotherBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[3]/div/div/div/div[5]',
            locateStrategy: 'xpath'
        },
        bestGpuBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[4]/div/div/div/div[4]',
            locateStrategy: 'xpath'
        },
        bestCpuBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[5]/div/div/div/div[5]',
            locateStrategy: 'xpath'
        },
        bestPowerBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[6]/div/div/div/div[4]',
            locateStrategy: 'xpath'
        },
        bestRamBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[7]/div/div/div/div[4]',
            locateStrategy: 'xpath'
        },
        bestStorageBody: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/div/div[8]/div/div/div[1]/div[3]',
            locateStrategy: 'xpath'
        },
        checkoutOverview: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]',
            locatestrategy: 'xpath'
        },
        finalPrice: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/h2',
            locateStrategy: 'xpath'
        },
        shipDate: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div[3]/div[2]/div[2]',
            locateStrategy: 'xpath'
        },
        finalCase: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div[1]',
            locateStrategy: 'xpath'
        },
        finalGpu: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/div/div[1]',
            locateStrategy: 'xpath'
        },
        finalCpu: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[3]/div/div[1]',
            locateStrategy: 'xpath'
        },
        finalCool: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[4]/div/div[1]',
            locateStrategy: 'xpath'
        },
        finalMother: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[4]/div/div[1]',
            locateStrategy: 'xpath'
        },
        finalRam: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[6]/div/div[1]',
            locateStrategy: 'xpath'
        },
        finalSsd: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[7]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        finalPower: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[8]/div/div[1]',
            locateStrategy: 'xpath'
        },
        starter: {
            selector: '/html/body/div[1]/div/div[1]/div[4]/nav/div[2]/div[2]/ul[1]/li[2]/a',
            locateStrategy: 'xpath'
        },
        starterHeading: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/section[1]/div/div/div[1]/div/h1',
            locateStrategy: 'xpath'
        },
        streamer: {
            selector: '/html/body/div[1]/div/div[1]/div[4]/nav/div[2]/div[2]/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        streamerHeader: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/section[1]/div/div/div[1]/div/h1',
            locateStrategy: 'xpath'
        },
        creator: {
            selector: '/html/body/div[1]/div/div[1]/div[4]/nav/div[2]/div[2]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        creatorHeader: {
            selector: '/html/body/div[1]/div/div[2]/div[2]/section[1]/div/div/div[1]/div/h1',
            locateStrategy: 'xpath'
         },
        home: {
            selector: '/html/body/div[1]/div/div[1]/div[4]/nav/div[2]/div[1]/div/a/img',
            locateStrategy: 'xpath'
        },

    }
}