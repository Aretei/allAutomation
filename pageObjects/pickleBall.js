module.exports ={
    url:'https://www.livepickleball.com/#/',
    elements: {
        profile: {
            selector: '(//a[@class="nav-link"])[1]',
            locateStrategy: 'xpath'
        },
        emailInput: 'input[placeholder="email"]',
        passwordInput: 'input[placeholder="password"]',
        loginButton: 'button[class="btn btn-primary"]',
    }
}