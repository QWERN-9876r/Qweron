const GetTagContent = require('./global').GetTagContent;
module.exports.ReadImports = function( data, lexem ) {
    const importData = GetTagContent( 'import', data )
                lexem.import = new Array();
                importData.replace(/\n/g, ';').split(";").forEach(
                    importStr => {
                        
                    if( !importStr.replace(/\n/g,'').replace(/\s/g, '') ) return

                    const OneImport = new Object(null);
                    // Сбор данных из <import>
                    if( importStr.split(":").length )  OneImport.name = importStr.split(':')[0].replace(':', '').replace(/\s/g,''); 
                    if( importStr.split("'").length ) {
                        OneImport.path = importStr.split("'")[1]
                        lexem.import.push(OneImport);
                    }    
                })

                return [ data, lexem ]
}