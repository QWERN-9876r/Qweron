const fs = require('fs');
var JSA = new Array();  // JavaScript Array

function Parser(lexemArray) {
    lexemArray.map(function(lexem){
        let JST = '';
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
    var index = lexemArray[0].import.length - 1;
    fs.writeFile('tml.js', `
    function CreateStyle(el,style){el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Upgrade(el,changes){if(typeof el==='string'){try{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}};
    ${JSA.map(function(jst){ 
        if(jst === JSA[0]){
            return "function main(){" + jst +"}/*"
        }
        return "*/function "+ lexemArray[0].import[index--
        ].name + "(){" + jst +"}/*"
    })}
    */main()
    ` , function(err){if(err){throw err}})
    
}

module.exports.Parser = Parser