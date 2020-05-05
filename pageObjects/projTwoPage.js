module.exports ={
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenInput: {
            selector: '(//input[@class="inputLine"])[1]',
            locateStrategy: 'xpath'
        },
        objectInput: {
            selector: '(//input[@class="inputLine"])[2]',
            locateStrategy: 'xpath'
        },
        stringInput: {
            selector: '(//input[@class="inputLine"])[3]',
            locateStrategy: 'xpath'
        },
        paliInput: {
            selector: '(//input[@class="inputLine"])[4]',
            locateStrategy: 'xpath'
        },
        sumInputOne: {
            selector: '(//input[@class="inputLine"])[5]',
            locateStrategy: 'xpath'
        },
        sumInputTwo: {
            selector: '(//input[@class="inputLine"])[6]',
            locateStrategy: 'xpath'
        },
        evenSelect: 'button[name="evenOddButton"]',
        objectSelect: 'button[name="objectFilterButton"]',
        stringSelect: 'button[id="nameFilterButton"]',
        paliSelect: 'button[name="palindromeButton"]',
        sumSelect: 'button[name="sumButton"]',
        evenRes: 'span[name="evenResults"]',
        objRes: 'span[name="objectFilterResults"]',
        stringRes: 'span[name="nameFilterResults"]',
        paliRes: 'span[name="palindromeResults"]',
        sumRes: 'span[name="sumResults"]',
    }
}