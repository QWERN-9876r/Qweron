const { Parser } = require("../parser/parser");


function Lexer(dataArray) {
    if(typeof dataArray === 'string') {
            const data = String(dataArray),
             lexem = new Object();
            if(data.split('<import>'[1])){const importData = String(data.split('<import>')[1]).split('</import>')[0];
            lexem.import = new Array();
            importData.replace(/\n/g, ';').split(";").map(function (importStr){
                if(!importStr.replace(/\n/g,'').replace(/\s/g, '')) {return}
                const OneImport = new Object(null);
                // Сбор данных из <import>
                if( importStr.split(":").length ) { OneImport.name = importStr.split(':')[0].replace(':', '').replace(/\s/g,''); }
                if( importStr.split("'").length ) {
                    OneImport.path = importStr.split("'")[1]
                    lexem.import.push(OneImport);
                }    
            })
             
            }
            if(data.split('<s>')[1]){lexem.script = String(data.split('<s>')[1]).split('</s>')[0]}
            if(data.split('<m>')[1]){lexem.html = String(data.split('<m>')[1]).split('</m>')[0]}
            if(data.split('<st>')[1]){lexem.style = String(data.split('<st>')[1]).split('</st>')[0]}
            return lexem
    }
    var lexemArray = new Array();
    // Разбор кажого файла tml
    dataArray.map(function(data){
        const lexem = new Object();
        // importData= Текст внутри тэга "<import>"
        if(data.split('<import>')[1]){const importData = String(data.split('<import>')[1]).split('</import>')[0]; 
        lexem.import = new Array();
        importData.replace(/\n/g, ';').split(";").map(function (importStr){
            if(!importStr.replace(/\n/g,'').replace(/\s/g, '')) {return}
            const OneImport = new Object(null);
            if( importStr.split(":").length ) { OneImport.name = importStr.split(':')[0].replace(':', '').replace(/\s/g,''); }
            if( importStr.split("'").length ) {
                OneImport.path = importStr.split("'")[1]
                lexem.import.push(OneImport);
            }    
        })
        
        }
        if(data.split('<s>')[1]){lexem.script = String(data.split('<s>')[1]).split('</s>')[0]}
        if(data.split('<m>')[1]){lexem.html = String(data.split('<m>')[1]).split('</m>')[0]}
        if(data.split('<st>')[1]){lexem.style = String(data.split('<st>')[1]).split('</st>')[0]}
        lexemArray.push(lexem)
        if(lexemArray.length === dataArray.length){;Parser(lexemArray)}
    
    })
}

module.exports.Lexer = Lexer