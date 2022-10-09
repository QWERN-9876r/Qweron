const fs = require('fs'),
 Dictionary = require('./lexer/dictionary').Dictionary,
 Lexer = require('./lexer/lexer').Lexer,
 Parser = require('./parser/parser').Parser;

fs.readFile('../test/index.tml', 'utf-8', function Tml(err, data){
    if(err){
        throw err
    }
    fs.writeFile('tml.js', Parser(Lexer(data, Dictionary)), function(err){
        if(err) {
            throw err
        }
    
    })
    
})


