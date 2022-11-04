const fs = require('fs');
var JSA = new Array();  // JavaScript Array

function Parser(lexemArray) {
    lexemArray.map(function(lexem){
        let JST = '';
        if( lexem.settings && lexem.settings.split(':')[1] ){
            let onOff = lexem.settings.split(':')[1].replaceAll(/\n/g, ';').split(';')[0].replaceAll(/\n/g, '').replaceAll(/\s/g, '');
            if(onOff === 'on'){onOff = true}else{
                if(onOff === 'off'){onOff = false}else {JST = `${JST}throw new Error('|  ${lexem.settings}  | --> In the settings, you can specify only on/off');`}
            }
            if(typeof onOff == 'boolean') {
                var Settings=new Object(null);
                if(lexem.settings.split('ErrorMessages:')[1]){Settings.ErrorMessages = onOff;}
                if(lexem.settings.split('WarningMessages:')[1]){Settings.WarningMessages = onOff;}

            }
        }else {if(lexem.settings && lexem.settings.replace(/\s/g,'').replaceAll(/\n/g,'')){JST = `${JST}throw new Error('|  ${lexem.settings}  | --> are not settings');`}}
        if(lexem.variable){ 
            
            lexem.variable.map(function(v){
                lexem.script = lexem.script.replaceAll(`|${v.name}.Update()|`,`variables.${v.name}.Update()`)
                lexem.script = lexem.script.replaceAll(`|${v.name}|`,`variables.${v.name}.valueOf`)
                lexem.html = lexem.html.replaceAll(`|${v.name}|`,`'+ variables.${v.name}.valueOf +'`)
                
            })
            
        }
        if(lexem.script){
            if(lexem.script.split('|ph|')[1]){
                
                var phArray = new Array(),
                 ST = ''
                lexem.script.split(';').forEach(function(str, index){
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
                console.log(ST)
            }
            JST = JST + ST
            console.log(phArray)
        }
        if(lexem.html && !lexem.style){JST = JST + `document.getElementById("home").innerHTML = '${lexem.html.replaceAll(/\n/g,'').replaceAll(/\s+/g,' ')}';`}
        if(lexem.style){JST = JST + `document.getElementById("home").innerHTML = '${lexem.html.replaceAll(/\n/g,'').replaceAll(/\s+/g,' ')}<style>${lexem.style.replace(/\n/g,'').replaceAll(/\s+/g,' ')}</style>';`}
        if(phArray){JST = JST + String(phArray).replaceAll(',','').replaceAll('|ph|','')}
        
            
        

    JSA.push(JST)
    })
    if(!lexemArray[0].import){return `
    function CreateStyle(el,style){if(typeof el=='string'){try{el = document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(!el){throw new Error('In "Upgrade()" html element not specified or specified incorrectly');return};el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Upgrade(el,changes){if(typeof el==='string'){try{if(el.split('.')[1]){el=document.querySelector(el).map(oneEl =>{if(changes.style){CreateStyle(oneEl,changes.style)};if(changes.txt){oneEl.textContent=changes.txt};if(changes.onclick){oneEl.onclick=changes.onclick};if(changes.placeHolder){oneEl.placeHolder=changes.placeHolder}}})}else{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}}};
    ${JSA[0]}
    `}
    var pageName
    
    if(lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, '') &&
     !Number(lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, ''))){
        pageName = lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, '')
     } else {pageName = 'main'}
    // lexemArray.map(lexem => {lexem.import.map(im => {if(im.name === 'main'){throw new Error('the page cannot be called "main"')}})})
    var index = lexemArray[0].import.length - 1,
     variablesArray = new Array()
    lexemArray.map(lexem => {
        if(lexem.variable){
            lexem.variable.map(v => {
                variablesArray.push(`${v.name}:{valueOf: ${v.content}, type: '${v.type}', Update(){Array.from(document.getElementsByClassName('c_${v.name}')).forEach(function(el){el.${v.type} = variables.${v.name}.valueOf})}}`)
            })
        }
    })
    fs.writeFile('singleScript.js', 
   `function CreateStyle(el,style){if(!el){throw new Error('html element not specified or specified incorrectly');return};el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Update(el,changes){if(typeof el==='string'){try{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}}; var variables = new Proxy({${variablesArray}},{set(target,prop,value){console.log(target);if(prop.type == 'textContent'){Array.from(document.getElementsByClassName('c_'+prop)).forEach(function(el){el}).textContent = value};target[prop].valueOf = value}});
    ${JSA.map(function(jst){ 
        if(jst === JSA[0]){
            return "function "+pageName+"(){" + jst +"}/*"
        }
        return "*/function "+ lexemArray[0].import[index--
        ].name + "(){" + jst +"}/*"
    })}
    */${pageName}()
    ` , function(err){if(err){throw err}})
    
}

module.exports.Parser = Parser