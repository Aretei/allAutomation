
module.exports = {
    url: 'https://www.google.com/',
    elements: {
        search: 'input[class="gLFyf gsfi"]',
        didItResult: 'div[class="FGpTBd"]',
        ubisoft: {
            selector: '(//h3[@class="LC20lb"])[1]',
            locateStrategy: 'xpath'
        },
        searchButton: 'button[class="Tg7LZd"]',
        ubiBar: 'div[class="gameSiteNavigation__container"]',
        mainDisplay: 'div[class="carouselSlide__slides__slide__media" ]',
        moreGames: {
            selector: '(//a[@class="gameSiteNavigation__nav-item"])[3]',
            locateStrategy: 'xpath'
        },
        siege: {
            selector: '(//div[@class="searchFeed__item__wrapper"])[10]',
            locateStrategy: 'xpath'
        },
        siegeMain: {
            selector: '(//div[@class="promo__wrapper"])[1]',
            locateStrategy: 'xpath'
        },
        searchGoogle: {
            selector: '(//input[@class="gNO89b"])[1]',
            locateStrategy: 'xpath'
        },


        

        
    }
}