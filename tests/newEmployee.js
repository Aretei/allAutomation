module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'newEmployee': browser => {
        browser.click('li[name="addEmployee"]')
        browser.click('li[name="employee11"]')
        .clearValue('input[name="nameEntry"]')
        browser.setValue('input[name="nameEntry"]', ['Sam', browser.Keys.ENTER])
        .clearValue('input[name="phoneEntry"]')
        browser.setValue('input[name="phoneEntry"]', ['1111111111', browser.Keys.ENTER])
        .clearValue('input[name="titleEntry"]')
        browser.setValue('input[name="titleEntry"]', ['moron', browser.Keys.ENTER])
        browser.click('button[name="save"]')
         .pause(10000)
    }
}