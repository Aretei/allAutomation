
// DOESNT WORK

var pracCommands = {
    getAt: function() {
        this
            .getAttribute('(//a/div)[1]', 'class', function(result){
                console.log(result.value)
                myClass = result.value
            })
    }
}

    module.exports = {
        url: 'https://alpha.yoodlize.com/',
        commands: [pracCommands],
        elements: {

        }

    }