var destiny ={}
module.exports ={
    beforeEach: browser =>{
        destiny = browser.page.projTwoPage()
        destiny.navigate()
    },
    after: browser => {
        destiny.end()
    },
    'stepOneYo': browser => {
        destiny
            .setValue('@evenInput','1,2,3,4')
            .click('@evenSelect')
            .expect.element('@evenRes').text.to.contain('2,4')
        destiny
            .setValue('@objectInput','name')
            .click('@objectSelect')
            .expect.element('@objRes').text.to.contain('Jimmy Joe')
        destiny
            .setValue('@stringInput','James')
            .click('@stringSelect')
            .expect.element('@stringRes').text.to.contain('James')
        destiny
            .setValue('@paliInput','racecar')
            .click('@paliSelect')
            .expect.element('@paliRes').text.to.contain('true')
        destiny
            .setValue('@sumInputOne','75')
            .setValue('@sumInputTwo','25')
            .click('@sumSelect')
            .expect.element('@sumRes').text.to.contain('100')

    }
}