var callBack = (browser) => {
    browser
        .getText('#employeeID', function (result) {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
}
// var clickByText = (browser, text) => {
//     browser
//         .useXpath()
//         .click(`//*[text()="${text}"]`)
//         .useCss()

module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'callback test': browser => {
        browser
            .click('li[name="employee3"]')
            callBack(browser)
        browser
            .click('li[name="employee-4"]')
            callBack(browser)
    },
    // 'function test': browser => {
    //     browser
    //     clickByText(browser, "Bernice Ortiz")

    // },
    // 'test 1': browser => {
    //     browser.click('li[name="employee1"]')
    //         .clearValue('input[name="nameEntry"]')
    //     browser.setValue('input[name="nameEntry"]', ['Dumb Dumb', browser.Keys.ENTER])
    //     browser.click('button[name="save"]')
    //         .verify.valueContains('input[name="nameEntry"]', "Dumb Dumb")
    //         .pause(3000)
    // },
    // 'test 2': browser => {
    //     browser.click('li[name="employee2"]')
    //         .clearValue('input[name="nameEntry"]')
    //     browser.setValue('input[name="nameEntry"]', ['lmao', browser.Keys.ENTER])
    //     browser.click('button[name="save"]')
    //         .verify.valueContains('input[name="nameEntry"]', "lmao")
    //         .pause(3000)
    // },
    // 'test 3': browser => {
    //     browser.click('li[name="employee3"]')
    //         .clearValue('input[name="nameEntry"]')
    //         .setValue('input[name="nameEntry"]', ['bad name my bad', browser.Keys.ENTER])
    //         .click('button[name="save"]')
    //         .pause(3000)
    // },

    // 'test 4': browser => {
    //     browser.click('li[name="employee3"]')
    //         .clearValue('input[name="nameEntry"]')
    //     browser.setValue('input[name="nameEntry"]', ['better name', browser.Keys.ENTER])
    //     browser.click('button[name="save"]')
    //         .verify.valueContains('input[name="nameEntry"]', "better name")
    //         .pause(3000)
    // },
    // 'test 5': browser => {
    //     browser.click('li[name="employee4"]')
    //         .clearValue('input[name="nameEntry"]')
    //     browser.setValue('input[name="nameEntry"]', ['haha i did it', browser.Keys.ENTER])
    //     browser.click('button[name="save"]')
    //         .verify.valueContains('input[name="nameEntry"]', "haha i did it")
    //         .pause(3000)
    // },
}
