var inter = {}
var erray = [
    { num: '1', res: 'Recreational Vehicles' },
    { num: '2', res: 'Outdoor Gear' },
    { num: '3', res: 'Electronics' },
    { num: '4', res: 'Party & Wedding Equipment'},
    { num: '5', res: 'Tools'},
    { num: '6', res: 'Clothing'}
]


module.exports = {
    beforeEach: browser => {
        inter = browser.page.interpoPage()
        inter.navigate()
        inter.resizeWindow(1920, 1080)
    },
    after: browser => {
        browser.end()
    },

    'interpo': browser => {
        // for (var x = 0; x <= 1; x++) {
        //     one('1', 'Recreational Vehicles')
        //     one('2', 'Outdoor Gear')
        //     one('3', 'Electronics')
        // }
        erray.forEach(test => {
            inter.theOne(test)
            console.log(test.num)
        console.log(test.res)
        })
        // inter
        //     .theOne('1', 'Recreational Vehicles')

    }
}
