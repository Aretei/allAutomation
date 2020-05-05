var yood = {}
module.exports = {
    beforeEach: browser => {
       yood = browser.page.yoodlizePage()
       yood
       .navigate()
    },
    after: browser => {
        yood.end()
    },
    'yoodlizeShit': browser => {
     yood
        .waitForElementPresent('@seeAllRec')
        .click('@seeAllRec') 
        .waitForElementVisible('@result')
        .verify.containsText('@result','Recreational Vehicles')
        .api.back()
    yood
        .waitForElementPresent('@seeAllOut')
        .click('@seeAllOut') 
        .waitForElementVisible('@result')
        .verify.containsText('@result','Outdoor Gear')
        .api.back()
    yood
        .waitForElementPresent('@seeAllElec')
        .click('@seeAllElec') 
        .waitForElementVisible('@result')
        .verify.containsText('@result','Electronics')
        .api.back()
        
      
    }
}