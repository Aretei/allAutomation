var nightCommands = {
    headers: function(){
        this
        .waitForElementPresent('@gettingStarted')
        .click('@gettingStarted')
        .click('@developerGuide')
        .click('@apiReference')
        return this
    },
    assert: function(){
        this
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
    }
}
module.exports = {
    url: 'https://nightwatchjs.org/',
    elements: {
        developerGuide: {
            selector: '(//a[@href="/guide"])[2]',
            locateStrategy: 'xpath'
        },
        gettingStarted: {
            selector: '(//a[@href="/gettingstarted"])[2]',
            locateStrategy: 'xpath'
        },
        apiReference: {
            selector: '(//a[@href="/gettingstarted"])[2]',
            locateStrategy: 'xpath'
        },
        assert: {
            selector: '(//a[@href="/api/"])[1]',
            locateStrategy: 'xpath'
        },
        attributeContains: {
            selector: '//a[@href="#assert-attributeContains"]',
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
            selector: '//a[@id="assert-attributeContains"]',
            locateStrategy: 'xpath'
        },
        attributeEqualsTitle: {
            selector: '//a[@id="assert-attributeEquals"]',
            locateStrategy: 'xpath'
        },
        containsTextTitle: {
            selector: '//a[@id="assert-containsText"]',
            locateStrategy: 'xpath'
        },
        cssClassPresentTitle: {
            selector: '//a[@id="assert-cssClassPresent"]',
            locateStrategy: 'xpath'
        },
        cssPropertyTitle: {
            selector: '//a[@id="assert-cssProperty"]',
            locateStrategy: 'xpath'
        },
        domPropertyContainsTitle: {
            selector: '//a[@id="assert-domPropertyContains"]',
            locateStrategy: 'xpath'
        },
        domPropertyEqualsTitle: {
            selector: '//a[@id="assert-domPropertyEquals"]',
            locateStrategy: 'xpath'
        },
        elementPresentTitle: {
            selector: '//a[@id="assert-elementPresent"]',
            locateStrategy: 'xpath'
        },
        titleTitle: {
            selector: '//a[@id="assert-title"]',
            locateStrategy: 'xpath'
        },
        urlContainsTitle: {
            selector: '//a[@id="assert-urlContains"]',
            locateStrategy: 'xpath'
        },
        urlEqualsTitle: {
            selector: '//a[@id="assert-urlEquals"]',
            locateStrategy: 'xpath'
        },
        valueTitle: {
            selector: '//a[@id="assert-value"]',
            locateStrategy: 'xpath'
        },
        valueContainsTitle: {
            selector: '//a[@id="assert-valueContains"]',
            locateStrategy: 'xpath'
        },
        visibleTitle: {
            selector: '//a[@id="assert-visible"]',
            locateStrategy: 'xpath'
        }

    }
}