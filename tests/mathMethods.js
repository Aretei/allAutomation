
var math = {
    add: (num1, num2) => {
        return num1 + num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },
    divide: (num1, num2) => {
        return num1 / num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    mathTest: (statement, search, result) => {
        statement
            .setValue('input[type="text"]', [search, statement.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(result)
    },
}



module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    'check addition': browser => {
        math
            .mathTest(browser, '1+5', math.add(1,5))
    },
    'check subtraction': browser => {
        math
            .mathTest(browser, '10-5', math.subtract(10,5))
    },
    'check division': browser => {
        math
        .mathTest(browser, '20/4', math.divide(20,4))
    },
        'check multiplication': browser => {
           math
           .mathTest(browser, '23*89', math.multiply(23,89))
        },
            after: browser => browser.end()
}