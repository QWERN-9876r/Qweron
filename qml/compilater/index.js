const fs = require('fs'),
 Dictionary = require('./lexer/dictionary').Dictionary,
 Lexer = require('./lexer/lexer').Lexer,
 Parser = require('./parser/parser').Parser;



fs.readFile('../test/index.tml', 'utf-8', function(err, data){
    if(err){
        throw err
        return
    }
    // console.log(Lexer(data, Dictionary))
    console.log(Parser(Lexer(data, Dictionary), Dictionary))


})