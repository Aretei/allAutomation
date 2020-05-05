var pickle ={}
module.exports ={
    beforeEach: browser =>{
        pickle = browser.page.pickleBall()
        pickle.navigate()
    },
    after: browser => {
        pickle.end()
    },
    'Login Test': browser => {
     pickle
        .verify.visible('.volunteerText')
        .click('@profile')
        .waitForElementPresent('@emailInput')
        .setValue('@emailInput','qatest')
        .setValue('@passwordInput','testpass')
        .click('@loginButton')
        .pause(10000)
    }
}