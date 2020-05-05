var fer = {}
var deArray = [
    { city: 'Lehi', purch: '$35,000.00', dow: '$12,000.00', address: '111 E 2222 N', citState: 'Lehi UT', firstName: 'Oi', lastName: 'Bruv', email: 'yerrr@buddy.net' },
    { city: 'Chicago', purch: '$3,000.00', dow: '$1,000.00', address: '111 E 2222 N', citState: 'Keller TX', firstName: 'Aretei', lastName: 'Cantaim', email: '3tap@oof.net' }
]

module.exports = {
    beforeEach: browser => {
        fer = browser.page.Fireball()
        fer.navigate()
    },
    after: browser => {
        fer.end()
    },
    'The 2 Time': browser => {
        deArray.forEach(test => {
            fer.theOneTest(fer, test)
        })
    }

}