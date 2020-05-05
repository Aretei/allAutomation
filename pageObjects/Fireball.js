var wizardCommands = {
theOneTest: function(test) {
    this
        .click('@next')
        .click('@typeHome')
        .click('@sinFam')
        .click('@next')
        .setValue('@cityInput', test.city)
        .click('@next')
        .click('@rentProp')
        .click('@yes')
        .click('@yes')
        .setValue('@purchPrice', test.purch)
        .setValue('@dowPay', test.dow)
        .click('@next')
        .click('@excellent')
        .click('@noKrupt')
        .setValue('@address', test.address)
        .setValue('@cityState', test.citState)
        .click('@next')
        .setValue('@firstName', test.firstName)
        .setValue('@lastName', test.lastName)
        .setValue('@email', test.email)
        .click('@next')
        .verify.elementPresent('@resultPage')
        .click('@startAgain')
        return this
},
}


module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [wizardCommands],
    elements: {
        next: 'button[name="nextButton"]',
        typeHome: 'select[id="loanTypes"] option[value="Home Purchase"]',
        typeRefi: 'select[id="loanTypes"] option[value="Refinance"]',
        primHome: 'button[value="Primary Home"]',
        rentProp: 'button[value="Rental Property"]',
        yes: 'button[name="yesButton"]',
        no: 'button[name="noButton"]',
        excellent: 'button[value="excellent"]',
        good: 'button[value="good"]',
        noKrupt: 'button[value="Has never been in bankruptcy"]',
        startAgain: 'button[name="restartButton"]',
        resultPage: 'div[class="vert-align"]',
        sinFam: 'select[id="propertyTypes"] option[value="Single Family Home"]',
        condo: 'select[id="propertyTypes"] option[value="Condo"]',
        cityInput: 'input[name="city"]',
        purchPrice: 'input[name="price"]',
        dowPay: 'input[name="down"]',
        address: 'input[id="addressOne"]',
        cityState: 'input[id="addressThree"]',
        firstName: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]',






        
    }
}