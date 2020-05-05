var reee = (browser, info) => {
    browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', info.name)
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', info.phone)
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', info.title)
        .click('button[name="save"]')
        
}
module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1920, 1080)
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },

    'func': browser => {
        reee(browser, {
            name: 'Sam Thompson',
            phone: '1234567890',
            title: 'idiot'
        })
        browser.expect.element('p[name="employeeName"]').text.to.equal('Sam Thompson')
        browser.expect.element('input[name="phoneEntry"]').value.to.equal('1234567890')
        browser.expect.element('input[name="titleEntry"]').value.to.equal('idiot')
    }
}