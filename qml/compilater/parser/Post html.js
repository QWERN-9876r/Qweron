module.exports.PostHtml = function( lexem ) {
    var phArray = new Array(),
                 ST = ''
                lexem.script.split(';').forEach(function(str){
                    if(str.split('{').length === str.split('}').length){
                        if(str.split('(').length === str.split(')').length ){
                            if(!str.split(',')[1]){
                                str.replaceAll(/\n/g,'')
                            }
                        }
                    }
                    if(str.split('|ph|')[1]){phArray.push(str.replace('|ph|', '') + ';')}else {
                        if(str.replace(/\s/g,'')) {
                            ST = ST + str + ';'
                        }
                        
                    }
                })

                return [ ST, phArray ]
}