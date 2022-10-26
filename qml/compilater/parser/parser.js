const fs = require('fs');
var JSA = new Array();  // JavaScript Array

function Parser(lexemArray) {
    lexemArray.map(function(lexem){
        let JST = '';
        if( lexem.settings && lexem.settings.split(':')[1] ){
            let onOff = lexem.settings.split(':')[1].replace(/\n/g, ';').split(';')[0].replace(/\n/g, '').replace(/\s/g, '');
            if(onOff === 'on'){onOff = true}else{
                if(onOff === 'off'){onOff = false}else {JST = `${JST}throw new Error('|  ${lexem.settings}  | --> In the settings, you can specify only on/off');`}
            }
            if(typeof onOff == 'boolean') {
                var Settings=new Object(null);
                if(lexem.settings.split('ErrorMessages:')[1]){Settings.ErrorMessages = onOff;}
                if(lexem.settings.split('WarningMessages:')[1]){Settings.WarningMessages = onOff;}

            } 
        }else {if(lexem.settings && lexem.settings.replace(/\s/g,'').replace(/\n/g,'')){JST = `${JST}throw new Error('|  ${lexem.settings}  | --> are not settings');`}}
        if(lexem.html && !lexem.style){JST = JST + `document.getElementById("home").innerHTML = '${lexem.html.replace(/\n/g,'')}';`}
        if(lexem.style){JST = JST + `document.getElementById("home").innerHTML = '${lexem.html.replace(/\n/g,'')}<style>${lexem.style.replace(/\n/g,'')}</style>'`}
        if(lexem.script){
            JST = JST + lexem.script.replace(/\n/g,';')
        }
            
        

    JSA.push(JST)
    })
    if(!lexemArray[0].import){return `
    function CreateStyle(el,style){el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Upgrade(el,changes){if(typeof el==='string'){try{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}};
    ${JSA[0]}
    `}
    var pageName
    if(lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, '') &&
     !Number(lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, ''))){
        pageName = lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, '')
     } else {pageName = 'main'}
    // lexemArray.map(lexem => {lexem.import.map(im => {if(im.name === 'main'){throw new Error('the page cannot be called "main"')}})})
    var index = lexemArray[0].import.length - 1;
    fs.writeFile('tml.js', `
    function CreateStyle(el,style){el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Upgrade(el,changes){if(typeof el==='string'){try{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}};
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