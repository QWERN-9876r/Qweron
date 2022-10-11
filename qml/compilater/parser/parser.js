var JSA = new Array(); // JavaScript Array


function Parser(lexem) {
    lexem.map(tag => {
        if(tag.tagName) {
            if(tag.tagName === '%') {JSA.push(tag.parameters.txt + ';'); return}
            if(tag.tagName === 'settings') {
                    if(tag.settings.ErrorMessages){
                    if(tag.settings.ErrorMessages === 'off') {
                        JSA.push('settings.ErrorMessages=false;')
                    }else {
                        JSA.push('settings.ErrorMessages=true;')
                    }
                    return
                }
            }
            if(Object.keys(tag.parameters).length) {
                if(tag.parameters.txt) {
                    tag.parameters.txt = `'${tag.parameters.txt}'`
                }
                if(tag.parameters.class) {        
                    tag.parameters.class = `, className: '${tag.parameters.class}'`
                }else {
                    tag.parameters.class = ' '
                }
            } else {
                tag.parameters.class = ' '
            }
            
            JSA.push(`Create.html('${tag.tagName}',new Array(),{txt: ${tag.parameters.txt}${tag.parameters.class}});`) 
        }
    })
    if(!JSA.length) {throw new Error('В tml нет рабочих тегов')}
    var string = '';
    JSA.map(str => {
        string = string + str
    })
    console.log('Успех!')
    return `const VertualTree=new Array(),Create=Object.create(null),get=Object.create(null),process=Object.create(null),settings=Object.create(null);settings.ErrorMessages=true;const fun=typeof function(){},obj=typeof{};function CreateStyle(el,style){el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};process.render=function(){document.getElementById('home').append(...VertualTree)};Create.Home=function(styleObj,className){try{const home=document.createElement('div');if(className){home.className=className};get.home=function(){return home};if(typeof styleObj===obj){CreateStyle(home,styleObj)};VertualTree.push(home);process.render();return home}catch(err){throw new Error('Ошибка в создании дома    '+err);}};Create.html=function(el,children,features){try{const element=document.createElement(el);if(features && typeof features===obj){if(features.className){element.className=features.className}if(features.txt){element.innerHTML=features.txt}if(features.src){element.src=features.src}if(features.onclick){element.onclick=features.onclick}if(typeof features.style===obj){CreateStyle(element,features.style)}};if(typeof children===obj){children.map(child=>{element.append(child)})};VertualTree[0].append(element);return element}catch(err){throw new Error('ошибка в создании html елемента'+err);}};process.update=function(el,changes){if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}}
    Create.Home()
    ${string}`
}

module.exports.Parser = Parser