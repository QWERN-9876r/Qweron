function Lexer(data, dictionary) {
    const lexem = new Array(),
     text = data.replace(/\s\s+/gm, ' '),
     tags = text.split('/>');
    tags.map(tag => {
        tag.trim()
        if(tag !== '') {
            var tagObject = new Object(),
             OneTag = new Object(),
             noneTxt = tag.split('*');
             tagObject.parameters = new Object();
            if(tag.split('*')[1]){tagObject.parameters.txt = tag.split('*')[1]}
            noneTxt[1] = '';
            const elements = String(noneTxt).split(" ")
            elements.map(el => {
                if(el === '//') {
                    tag = ''
                    return
                }
                if(dictionary.tagNames.indexOf(el) != -1) {
                    OneTag.tagName = el;
                }
                if(OneTag.tagName === 'settings') {
                        if(el === 'ErrorMessages:') {
                            OneTag.settings = new Object();
                            OneTag.settings.ErrorMessages = tag.split("'")[1]
                            Object.assign(tagObject, OneTag)
                        }
                    return                    
                    
                }
                if(dictionary.parametrs.indexOf(el) != -1) {
                    if(el === 'class:') {
                        tagObject.parameters.class = tag.split("'")[1]
                    }
                }
    
                if(dictionary["tagNames"].indexOf(el) == -1 && el != '%' && el != '*' && el != '/>' && 
                OneTag.tagName != 'settings' && el.split("'").length <= 1) {return}
            })
            if(OneTag.tagName){
                Object.assign(tagObject, OneTag)
            }
            lexem.push(tagObject)
        }
        
        
        
    })


    return lexem
}

module.exports.Lexer = Lexer