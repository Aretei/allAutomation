var nightCommands = {
    headers: function () {
        this
            .waitForElementPresent('@gettingStarted')
            .click('@gettingStarted')
            .click('@developerGuide')
            .click('@apiReference')
        return this
    },
    assert: function () {
        this
            .click('@assert')
            .waitForElementVisible('@attributeContains')
            .click('@attributeContains')
            .waitForElementVisible('@attributeContainsTitle')
            .assert.containsText('@attributeContainsTitle', 'assert[.not].attributeContains()')
            .click('@attributeEquals')
            .waitForElementVisible('@attributeEqualsTitle')
            .assert.containsText('@attributeEqualsTitle', 'assert[.not].attributeEquals()')
            .click('@containsText')
            .waitForElementVisible('@containsTextTitle')
            .assert.containsText('@containsTextTitle', 'assert[.not].containsText()')
            .click('@cssClassPresent')
            .waitForElementVisible('@cssClassPresentTitle')
            .assert.containsText('@cssClassPresentTitle', 'assert[.not].cssClassPresent()')
            .click('@cssProperty')
            .waitForElementVisible('@cssPropertyTitle')
            .assert.containsText('@cssPropertyTitle', 'assert[.not].cssProperty()')
            .click('@domPropertyContains')
            .waitForElementVisible('@domPropertyContainsTitle')
            .assert.containsText('@domPropertyContainsTitle', 'assert[.not].domPropertyContains()')
            .click('@domPropertyEquals')
            .waitForElementVisible('@domPropertyEqualsTitle')
            .assert.containsText('@domPropertyEqualsTitle', 'assert[.not].domPropertyEquals()')
            .click('@elementPresent')
            .waitForElementVisible('@elementPresentTitle')
            .assert.containsText('@elementPresentTitle', 'assert[.not].elementPresent()')
            .click('@title')
            .waitForElementVisible('@titleTitle')
            .assert.containsText('@titleTitle', 'assert[.not].title()')
            .click('@urlContains')
            .waitForElementVisible('@urlContainsTitle')
            .assert.containsText('@urlContainsTitle', 'assert[.not].urlContains()')
            .click('@urlEquals')
            .waitForElementVisible('@urlEqualsTitle')
            .assert.containsText('@urlEqualsTitle', 'assert[.not].urlEquals()')
            .click('@value')
            .waitForElementVisible('@valueTitle')
            .assert.containsText('@valueTitle', 'assert[.not].value()')
            .click('@valueContains')
            .waitForElementVisible('@valueContainsTitle')
            .assert.containsText('@valueContainsTitle', 'assert[.not].valueContains()')
            .click('@visible')
            .waitForElementVisible('@visibleTitle')
            .assert.containsText('@visibleTitle', 'assert[.not].visible()')
        return this
    },
    expect: function () {
        this
            .useXpath()
            .click('/html/body/section[5]/div[2]/div/div/div[1]/div/ul/li[2]/a')
            .click('/html/body/section[5]/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[6]/h5/a')
            .useCss()
            .expect.element('h2[id="expect-cookie-"]').text.to.contain('expect.cookie()')
        this
            .useXpath()
            .click('/html/body/section[5]/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[7]/h5/a')
            .useCss()
            .expect.element('h2[id="expect-element-"]').text.to.contain('expect.element()')
        this
        return this
    },
   
}
module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [nightCommands],
    elements: {
        developerGuide: {
            selector: '/html/body/div[1]/nav/div/div[2]/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        gettingStarted: {
            selector: '(//a[@href="/gettingstarted"])[2]',
            locateStrategy: 'xpath'
        },
        apiReference: {
            selector: '/html/body/div[1]/nav/div/div[2]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        assert: {
            selector: '/html/body/section[5]/div[2]/div/div/div[1]/div/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        attributeContains: {
            selector: '/html/body/section[5]/div[2]/div/div/div[1]/div/ul/li[1]/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        attributeEquals: {
            selector: '//a[@href="#assert-attributeEquals"]',
            locateStrategy: 'xpath'
        },
        containsText: {
            selector: '//a[@href="#assert-containsText"]',
            locateStrategy: 'xpath'
        },
        cssClassPresent: {
            selector: '//a[@href="#assert-cssClassPresent"]',
            locateStrategy: 'xpath'
        },
        cssProperty: {
            selector: '//a[@href="#assert-cssProperty"]',
            locateStrategy: 'xpath'
        },
        domPropertyContains: {
            selector: '//a[@href="#assert-domPropertyContains"]',
            locateStrategy: 'xpath'
        },
        domPropertyEquals: {
            selector: '//a[@href="#assert-domPropertyEquals"]',
            locateStrategy: 'xpath'
        },
        elementPresent: {
            selector: '//a[@href="#assert-elementPresent"]',
            locateStrategy: 'xpath'
        },
        title: {
            selector: '//a[@href="#assert-title"]',
            locateStrategy: 'xpath'
        },
        urlContains: {
            selector: '//a[@href="#assert-urlContains"]',
            locateStrategy: 'xpath'
        },
        urlEquals: {
            selector: '//a[@href="#assert-urlEquals"]',
            locateStrategy: 'xpath'
        },
        value: {
            selector: '//a[@href="#assert-value"]',
            locateStrategy: 'xpath'
        },
        valueContains: {
            selector: '//a[@href="#assert-valueContains"]',
            locateStrategy: 'xpath'
        },
        visible: {
            selector: '//a[@href="#assert-visible"]',
            locateStrategy: 'xpath'
        },
        attributeContainsTitle: {
            selector: '//h3[@id="assert-attributeContains"]',
            locateStrategy: 'xpath'
        },
        attributeEqualsTitle: {
            selector: '//h3[@id="assert-attributeEquals"]',
            locateStrategy: 'xpath'
        },
        containsTextTitle: {
            selector: '//h3[@id="assert-containsText"]',
            locateStrategy: 'xpath'
        },
        cssClassPresentTitle: {
            selector: '//h3[@id="assert-cssClassPresent"]',
            locateStrategy: 'xpath'
        },
        cssPropertyTitle: {
            selector: '//h3[@id="assert-cssProperty"]',
            locateStrategy: 'xpath'
        },
        domPropertyContainsTitle: {
            selector: '//h3[@id="assert-domPropertyContains"]',
            locateStrategy: 'xpath'
        },
        domPropertyEqualsTitle: {
            selector: '//h3[@id="assert-domPropertyEquals"]',
            locateStrategy: 'xpath'
        },
        elementPresentTitle: {
            selector: '//h3[@id="assert-elementPresent"]',
            locateStrategy: 'xpath'
        },
        titleTitle: {
            selector: '//h3[@id="assert-title"]',
            locateStrategy: 'xpath'
        },
        urlContainsTitle: {
            selector: '//h3[@id="assert-urlContains"]',
            locateStrategy: 'xpath'
        },
        urlEqualsTitle: {
            selector: '//h3[@id="assert-urlEquals"]',
            locateStrategy: 'xpath'
        },
        valueTitle: {
            selector: '//h3[@id="assert-value"]',
            locateStrategy: 'xpath'
        },
        valueContainsTitle: {
            selector: '//h3[@id="assert-valueContains"]',
            locateStrategy: 'xpath'
        },
        visibleTitle: {
            selector: '//h3[@id="assert-visible"]',
            locateStrategy: 'xpath'
        },
        searchBar: 'input[class="search-input ds-input"]',

    }
}