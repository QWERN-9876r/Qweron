function Lexer(data, dictionary) {
    const lexems = new Array(),
     text = data.replace(/\s\s+/gm, ' '),
     tags = text.split('/>');
    tags.map(tag => {
        tag.trim()
        if(tag !== '') {
            const tagObject = new Object(),
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
    
                if(dictionary["tagNames"].indexOf(el) != -1 && el != '%' && el != '*' && el != '/>') {return}
                lexems.push(tagObject)
            })
            if(OneTag.tagName){
                Object.assign(tagObject, OneTag)
            }
        }
        
        
    })


    return lexems
}

module.exports.Lexer = Lexer