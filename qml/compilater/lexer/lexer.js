const { Parser } = require("../parser/parser"),
SimpleTags = require('./dictionary').SimpleTags,
MainFunction = require('./global').MainFunction,
GetTagContent = require('./global').GetTagContent,
ReadImports = require('./readImports').ReadImports;

// ______________SimpleTags________________
function SimpleTagsDataFunction( lexem, data ) {
    const SimpleTagsData = SimpleTags.map(
        tagName => 
        (data.split(`<${tagName}>`)[1]) ? GetTagContent( tagName, data ) : null
    )  
    lexem.script = SimpleTagsData[0]
    lexem.html = SimpleTagsData[1]
    lexem.style = SimpleTagsData[2]
    lexem.settings = SimpleTagsData[3]
    lexem.namePage = SimpleTagsData[4]

    return lexem
}        
//________________________________________


function Lexer(dataArray) {
    if( typeof dataArray === 'string' ) {
            let data = String(dataArray),
             lexem = new Object();
            if( data.split('<import>'[1]) ) [ data, lexem ] = ReadImports( data, lexem )
            
            [ lexem, data, saveArray ] = MainFunction( data, lexem )

            if( saveArray ){
                saveArray.map(
                    save => {
                    data = data.replaceAll(`<${save.name}>`, save.script)
                }) 
            }
            SimpleTagsDataFunction( lexem, data )
     
            return lexem
    }
    var lexemArray = new Array();
    // Разбор кажого файла SingleScript
    dataArray.forEach(
        data => {
        let lexem = new Object();
        // importData= Текст внутри тэга "<import>"
        if( data.split('<import>'[1]) ) [ data, lexem ] = ReadImports( data, lexem )
        [ lexem, data, saveArray ] = MainFunction( data, lexem )
            
            if( saveArray ) {
                saveArray.forEach(
                    save => {
                    data = data.replaceAll( `<${save.name}>`, save.script )
                    dataArray.forEach(
                        oneEl => {  
                        dataArray.push(oneEl.replaceAll(`<${save.name}>`, save.script))
                        dataArray.shift()
                    }) 
                })
            }
            lexem = SimpleTagsDataFunction( lexem, data )
        lexemArray.push(lexem)
        if(lexemArray.length === dataArray.length) Parser( lexemArray )
    
    })
}

module.exports.Lexer = Lexer