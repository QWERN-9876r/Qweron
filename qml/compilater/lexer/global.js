function GetTagContent ( tagName, data ) {
    return String(data.split(`<${tagName}>`)[1]).split(`</${tagName}>`)[0];
}

module.exports.MainFunction = function( data, lexem ) {
    if( data.split('<save>')[1] ){
        if( !saveArray ) var saveArray = new Array()

    
        const txt = GetTagContent( 'save', data )
        txt.split('^^').forEach(
            oneSave => {
            saveArray.push({
                name: oneSave.split(':')[0].replace(/\n/g,'').replace(/\s/g,''),
                script: oneSave.split('|')[1]})
        })
        
        }
        //________variables_________
        if( data.split('<var>')[1] ) {
            const txt = GetTagContent( 'var', data )
            lexem.variable = new Array()
            txt.replace(/\n/g,';').split(';').forEach(
                variable => {
                if(variable.split(':')[0].replace(/\s/g,'')){
                    lexem.variable.push({
                        name: variable.split(':')[0].replace(/\s/g,''),
                        content: String(variable.split(':')[1]).split('|')[0],
                        type: variable.split('|')[1]
            })
                }
                
            })
        }
        // Processing simple tags
        return [ lexem, data, saveArray ]
}

module.exports.GetTagContent = GetTagContent;