var issArray = [
    "Herriman",
    "Riverton"
]
var searchWeather = (browser, search) => {
    browser
        .click('.enter-location__input')
        .setValue('.enter-location__input', search)
        .click('button')
        .verify.containsText('.current-weather__weather', search)
        .click('button')
}
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')

    },
    after: browser => {
        browser.end()
    },
    'weather test': browser => {
        searchWeather(browser,issArray[0])
        searchWeather(browser,issArray[1])
    }

}