function Lexer(data, dictionary) {
    const lexem = new Object();
    
    if(data.split('<s>')[1]){lexem.script = String(data.split('<s>')[1]).split('</s>')[0]}
    if(data.split('<m>')[1]){lexem.html = String(data.split('<m>')[1]).split('</m>')[0]}
    if(data.split('<st>')[1]){lexem.style = String(data.split('<st>')[1]).split('</st>')[0]}
    return lexem
}

module.exports.Lexer = Lexer