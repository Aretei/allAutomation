var projCommands = {
    loginYo: function(asset) {
        this
            // .pause()
            .click('@signIn')
            .waitForElementPresent('@emailInput')
            .setValue('@emailInput', asset.email)
            .setValue('@passInput', asset.pass)
            .waitForElementVisible('@signInButton')
            .click('@signInButton')
            return this
    },
    searchYo: function(asset) {
        this
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', asset.zipCode)
            .pause(200) //seems to help make sure the search button gets clicked more consistently, my wifi might just be slow
            .click('@searchButton')
            .waitForElementVisible('@forRentButton')
            .click('@forRentButton')
            return this
    },
    filterPrice: function(asset) {
        this
            .waitForElementVisible('@saleTypeFilter')
            .click('@priceFilter')
            .click('@minPrice')
            .setValue('@minPrice', asset.minPrice)
            .click('@maxPrice')
            .setValue('@maxPrice', asset.maxPrice)
            .click('@priceDone')
            return this
    },
    filterBeds: function(asset) {
        this
            .click('@bedsFilter')
            .waitForElementVisible('@bedsOption')
            .click('@bedsOption')
            .click('@bedsDone')
            return this
    },
    filterHomeType: function(asset) {
        this
            .click('@homeTypeFilter')
            .waitForElementVisible('@homeTypeHouses')
            .click('@homeTypeHouses')
            .click('@homeTypeCondos')
            .click('@homeTypeTownHome')
            .click('@homeTypeDone')
            return this
    },
    allFiltersYo: function(asset) {
        this
            .filterPrice()
            .filterBeds()
            .filterHomeType()
            return this
    },
    lookAtHouses: function(asset) {
        this
            .waitForElementVisible('@searchTitle')
            .expect.element('@searchTitle').text.to.contain(asset.searchTitle)
        this
            .click('@homeOne')
            .waitForElementVisible('@addHouse')
            .click('@addHouse')
            .waitForElementVisible('@backHouse')
            .click('@backHouse')
            .waitForElementVisible('@homeTwo')
            .click('@homeTwo')
            .waitForElementVisible('@addHouse')
            .click('@addHouse')
            .waitForElementVisible('@backHouse')
            .click('@backHouse')
            .waitForElementVisible('@homeThree')
            .click('@homeThree')
            .waitForElementVisible('@addHouse')
            .click('@addHouse')
            .waitForElementVisible('@backHouse')
            .click('@backHouse')
            return this
    },
    changeFilterHomeType: function(asset) {
        this
            .click('@homeTypeFilter')
            .waitForElementVisible('@homeTypeHouses')
            .click('@homeTypeHouses')
            .click('@homeTypeApartment')
            .click('@homeTypeTownHome')
            .click('@homeTypeManufactured')
            .click('@homeTypeMulti')
            .click('@homeTypeLotLand')
            .click('@homeTypeDone')
            return this
    },
    changeSaleType: function(asset) {
        this
            .click('@saleTypeFilter')
            .waitForElementVisible('@forSale')
            .click('@forSale')
            .click('@forRent')
            .click('@saleTypeDone')
            return this
    },
    changePriceFilter: function(asset) {
        this
            .click('@priceFilter')
            .setValue('@minPrice', asset.minPrice)
            .setValue('@maxPrice', asset.maxPrice)
            .click('@priceDone')
            return this
    },
}
module.exports = {
    url: 'https://www.zillow.com/',
    commands: [projCommands],
    elements: {
        searchBar: {
            selector: '//input[@class="Input-sc-7nzn9k-0 yVqRQ react-autosuggest__input"]',
            locateStrategy: 'xpath'
        },
        searchButton: {
            selector: '//label[@class="Adornment__StyledAdornment-sc-1dueuzz-0 Adornment__StyledAdornmentRight-sc-1dueuzz-2 cNUDgw "]',
            locateStrategy: 'xpath'
        },
        saleTypeFilter: 'button[id="listing-type"]',
        priceFilter: 'button[id="price"]',
        bedsFilter: 'button[id="beds"]',
        homeTypeFilter: 'button[id="home-type"]',
        saleTypeDone: {
            selector: '(//button[@class="filter-popover-apply zsg-button"])[1]',
            locateStrategy: 'xpath'
        },
        priceDone: {
            selector: '(//button[@class="filter-popover-apply zsg-button"])[2]',
            locateStrategy: 'xpath',
        },
        bedsDone: {
            selector: '(//button[@class="filter-popover-apply zsg-button"])[3]',
            locateStrategy: 'xpath'
        },
        homeTypeDone: {
            selector: '(//button[@class="filter-popover-apply zsg-button"])[4]',
            locateStrategy: 'xpath'
        },
        saveButton: 'button[class="save-search-button zsg-button"]',
        addHouse: {
            selector: '(//span[@class="ds-action-bar-label"])[1]',
            locateStrategy: 'xpath'
        },
        signIn: {
            selector: '(//a[@class="znav-section-title"])[6]',
            locateStrategy: 'xpath'
        },
        emailInput: 'input[id="reg-login-email"]',
        passInput: 'input[id="inputs-password"]',
        signInButton: 'input[class="zsg-button_primary zsg-button_fullsize"]',
        forRentButton: {
            selector: '(//button[@class="sc-14dvu6m-3 fOEcRh "])[2]',
            locateStrategy: 'xpath'
        },
        minPrice: 'input[id="price-exposed-min"]',
        maxPrice: 'input[id="price-exposed-max"]',
        bedsOption: 'label[for="beds-options-2"]',
        homeTypeHouses: 'label[for="home-type_isSingleFamily"]',
        homeTypeCondos: 'label[for="home-type_isCondo"]',
        homeTypeTownHome: 'label[for="home-type_isTownhouse"]',
        homeTypeManufactured: 'label[for="home-type_isManufactured"]',
        homeTypeMulti: 'label[for="home-type_isMultiFamily"]',
        homeTypeLotLand: 'label[for="home-type_isLotLand"]',
        homeTypeApartment: 'label[for="home-type_isApartment"]',
        searchTitle: 'h1[class="search-title"]',
        homeOne: {
            selector: '(//a[@class="list-card-link list-card-info"])[1]',
            locateStrategy: 'xpath'
        },
        homeTwo: {
            selector: '(//a[@class="list-card-link list-card-info"])[2]',
            locateStrategy: 'xpath'
        },
        homeThree: {
            selector: '(//a[@class="list-card-link list-card-info"])[3]',
            locateStrategy: 'xpath'
        },
        forSale: {
            selector: '//div[@class="zsg-button filter-button filter-expandable filter_applied"]',
            locateStrategy: 'xpath'
        },
        forRent: 'label[for="isForRent"]',
        backHouse: 'button[class="ds-close-lightbox-icon hc-back-to-list"]',
        savedHomes: 'a[class="saved-homes-link"]',
        savedHomesCounter: 'span[class="result-count"]',
    },
}