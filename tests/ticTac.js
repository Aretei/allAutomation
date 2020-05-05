module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1920, 1080)
            .url('https://www.google.com/search?q=tic+tac+toe&oq=tic+&aqs=chrome.1.69i57j0l7.2484j0j7&sourceid=chrome&ie=UTF-8')

    },
    after: browser => {
        browser.end()
    },

    'i win': browser => {
        browser
            .pause(1000)
            .useXpath()
            .click('(//div[@class="fSXkBc"])[3]')
            .click('(//td[@class="roCb6d ihO9axKxFUP0-TG5EmTXUFMQ"])[1]')

    }
}