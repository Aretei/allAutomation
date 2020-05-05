var interpoCommands = {
    theOne: function(data) {
        this
        .useXpath()
        .click(`(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${data.num}]`)
        .expect.element('//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain(`${data.res}`)
    this
        .api.back()
        return this
    },
   
   
    another: function() {
        this
    },
    
}
module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [interpoCommands],
    elements: {

    }
}