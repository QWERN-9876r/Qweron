const Qweron = require("./Qweron").Qweron,
 JSA = new Array(); // JavaScript Array


function Parser(lexem) {
    lexem.map(tag => {
        if(tag.tagName) {
            if(tag.tagName === '%') {JSA.push(tag.parameters.txt)}
            JSA.push(`function(){Qweron().Create.html(${tag.tagName},new Array(null),${tag.parameters})}`) 
        }
    })
    // console.log(JSA)
    var string = '';
    JSA.map(str => {
        string = string + str
    })
    console.log('Успех!')
    return `import Qweron from './parser/Qweron'
    Qweron()
    ${string}`
}

module.exports.Parser = Parser