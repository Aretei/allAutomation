var empCommands = {
    addEmpTest: function(asset) {
        this
            .click('@addEmp')
            .click('@newEmp')
            .clearValue('@nameInput')
            .setValue('@nameInput', asset.name)
            .clearValue('@phoneInput')
            .setValue('@phoneInput', asset.phone)
            .clearValue('@emailInput')
            .setValue('@emailInput', asset.email)
            .clearValue('@titleInput')
            .setValue('@titleInput', asset.title)
            .click('@save')
            return this
    },
    editEmpTest: function(asset) {
        this
            .click('@oi')
            .clearValue('@nameInput')
            .setValue('@nameInput', asset.newName)
            .clearValue('@phoneInput')
            .setValue('@phoneInput', asset.newPhone)
            .clearValue('@emailInput')
            .setValue('@emailInput', asset.newEmail)
            .clearValue('@titleInput')
            .setValue('@titleInput', asset.newTitle)
            .click('@save')
            return this
    },
    deleteEmpTest: function(empy) {
        this
            .click('@bruv')
            .click('@delete')
            .pause(1000)
            .api.acceptAlert()
            return this
    },
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [empCommands],
    elements: {
        addEmp: 'li[name="addEmployee"]',
        newEmp: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        oi: {
            selector: '//li[text()="oi"]',
            locateStrategy: 'xpath'
        },
        bruv: {
            selector: '//li[text()="Bruv"]',
            locateStrategy: 'xpath'
        },
        nameInput: 'input[name="nameEntry"]',
        phoneInput: 'input[name="phoneEntry"]',
        emailInput: 'input[name="emailEntry"]',
        titleInput: 'input[name="titleEntry"]',
        save: 'button[name="save"]',
        delete: 'button[name="delete"]',
    }
}