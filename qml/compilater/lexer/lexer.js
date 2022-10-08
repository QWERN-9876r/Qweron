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
            if(tag.split('*')[1]){tagObject['textContent'] = tag.split('*')[1]}
            noneTxt[1] = '';
            const elements = String(noneTxt).split(" ")
            elements.map(el => {
                if(el === '//') {
                    tag = ''
                    return
                }
                if(dictionary["tagNames"].indexOf(el != -1)) {
                    OneTag.tagName = el;
                }


                
                if(OneTag.tagName){
                    Object.assign(tagObject, OneTag)
                }
                if(tagObject.tagName) {
                    const parameters = noneTxt[0].split("'");
                    if(el == 'class:') {
                         if(!tagObject.parameters){
                            tagObject.parameters = {class: parameters[1]}
                            return
                         }
                         if(Object.keys(tagObject.parameters).lenght = 1) {
                            tagObject.parameters = {class: parameters[3]}
                            return
                         }
                    }
                    if(el == 'style:') {
                        if(!tagObject.parameters){
                            tagObject.parameters = {style: parameters[1]}
                            return
                         }
                         if(Object.keys(tagObject.parameters).lenght = 1) {
                            tagObject.parameters = {style: parameters[3]}
                            return
                         }
                    }
                }
                if(dictionary["tagNames"].indexOf(el) != -1 && el != '%' && el != '*' && el != '/>') {return}
                lexems.push(tagObject)
            })
        }
        
    })


    return lexems
}

module.exports.Lexer = Lexer