var emplo = {}
var emploTest = (suh, dude) => {
    suh
        .verify.visible('@burger')
        .verify.containsText('@title', dude.one)
        .verify.containsText('@welcome', dude.two)
        .verify.containsText('@welcome', dude.three)
        .verify.containsText('@welcome', dude.four)
        .verify.containsText('@welcome', dude.five)
        .verify.visible('@required')
        .verify.visible('@error')
}
module.exports = {
    beforeEach: browser => {
        emplo = browser.page.emploPage()
        emplo.navigate()
    },
    after: browser => {
        emplo.end()
    },
    'Check the home page': browser => {
       emploTest(emplo, {one: 'Wanted Queries', two: 'Welcome to "Wanted Queries"', three: 'Enter Wanted', four: 'Modify Wanted', five: 'Cancel Wanted'})
    },
    // 'Check required fields on warrant': browser => {
    //     emplo
    //         .url('http://localhost:3000/#/enter')
    //         .waitForElementVisible('@hdrInput')
    //         .verify.attributeContains('@hdrInput', 'class', 'required')
    //         .verify.attributeContains('@mkeInput', 'class', 'required')
    //         .verify.attributeContains('@oriInput', 'class', 'required')
    //         .verify.attributeContains('@namInput', 'class', 'required')
    //         .verify.attributeContains('@sexInput', 'class', 'required')
    //         .verify.attributeContains('@racInput', 'class', 'required')
    //         .verify.attributeContains('@hgtInput', 'class', 'required')
    //         .verify.attributeContains('@wgtInput', 'class', 'required')
    //         .verify.attributeContains('@haiInput', 'class', 'required')
    //         .verify.attributeContains('@offInput', 'class', 'required')
    //         .verify.attributeContains('@dowInput', 'class', 'required')
    //     emplo.getAttribute('@olnInput', 'class', result => {
    //         emplo.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
    //     })
    //     emplo.getAttribute('@olsInput', 'class', result => {
    //         emplo.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
    //     })
    //     emplo.getAttribute('@oldInput', 'class', result => {
    //         emplo.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
    //     })
    //     emplo.getAttribute('@licInput', 'class', result => {
    //         emplo.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
    //     })
    //     emplo.getAttribute('@lisInput', 'class', result => {
    //         emplo.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
    //     })
    //     emplo.getAttribute('@lidInput', 'class', result => {
    //         emplo.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
    //     })
    // }
}