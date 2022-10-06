const fs = require('fs')

fs.readFile('../test/index.tml', 'utf-8', function(err, data){
    if(err){
        throw err
        return
    }
    const lexem = new Array(),
     text = data.replace(/\s\s+/gm, ' '),
    tags = text.split('>')
    tags.map(tag => {
        tag.trim()
        if(tag !== '') {
            const tagObject = new Object(),
            symbols = new Object(),
            noneTxt = tag.split('*');
            if(tag.split('*')[1]){tagObject['textContent'] = tag.split('*')[1]}
            noneTxt[1] = '';
            const elements = String(noneTxt).split(" ")
            elements.map(el => {
                if(el === '//') {
                    tag = ''
                    return
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
                if(!el.split('<')[1] && el != '%' && el != '*' && el != '/>') {return}
                if(tagObject.tagName){return}
                if(el === '<div') {
                    tagObject['tagName'] = 'div'
                } else {
                    if(el === '<input'){tagObject['tagName'] = 'input'
                }else {
                    if(el === '<img'){tagObject['tagName'] = 'img'
                }else {
                    if(el === '<h1'){tagObject['tagName'] = 'h1'
                }else {
                    if(el === '<button'){tagObject['tagName'] = 'button'
                }else {
                    if(el === '<p'){tagObject['tagName'] = 'p'
                }else {
                    if(el === '</div'){tagObject['tagName'] = '/div'
                }else {
                    if(el === '%'){tagObject['tagType'] = 'script'
                }else {
                    if(el === '*'){tagObject['tagOpen'] = true
                } else {
                    if(el === '/>'){tagObject['tagOpen'] = false}
                }
                }
                }
                }
                }
                }
                }
                }
                }
                if(!tagObject.tagName && !tagObject.tagType){
                    return
                }
                lexem.push(tagObject)
                console.log(lexem)
            })
        }
        
    })
    
    

})