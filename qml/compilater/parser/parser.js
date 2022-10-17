var JSA = ''; // JavaScript Array


function Parser(lexem) {
    if(lexem.html && !lexem.style){JSA = JSA + `document.getElementById("home").innerHTML = '${lexem.html.replace(/\n/g,'')}';`}
    if(lexem.style){JSA = JSA + `document.getElementById("home").innerHTML = '${lexem.html.replace(/\n/g,'')}<style>${lexem.style.replace(/\n/g,'')}</style>';`}
    if(lexem.script){
        
        // if(lexem.script.split('const')[1] || lexem.script.split('var')[1] || lexem.script.split('let')[1]) {
        //     if(lexem.script.split('const')[1]) {
        //         const data = String(lexem.script.split('const')[1]).split(';')[0],
        //          name = String(data).split('=')[0].replace(/\s/g,'');
        //          JSA = JSA + `const ${name}P= new Object(Primitive);${name}.prototype.valueOf=function{return ${String(data).split('=')[1]}}`
                 
        //     }
        //     if(lexem.script.split('var')[1]) {
        //         const data = String(lexem.script.split('var')[1]).split(';')[0],
        //          name = String(data).split('=')[0].replace(/\s/g,'');
        //          JSA = JSA + `const ${name}P= new Object(Primitive);var ${name} = new Proxy(${name}P, {
        //             get(target, prop){
        //                 return ${String(data).split('=')[1].replace(/\s/g,'')}
        //                 }
        //             set(target, prop){
        //                 return 
        //             }
        //          })`
                 
        //     }
        //     if(lexem.script.split('let')[1]) {
        //         const data = String(lexem.script.split('let')[1]).split(';')[0],
        //          name = String(data).split('=')[0].replace(/\s/g,'');
        //          JSA = JSA + `let ${name}P= new Object(Primitive);${name}.prototype.valueOf=function{return ${String(data).split('=')[1]}}`
        //     }
            JSA = JSA + lexem.script.replace(/\n/g,';')//.replace(lexem.script.split('var')[1].split(';')[0], '').replace('var', '')}
        }   
        

    return `
    const Primitive={Big(value){++value}};function CreateStyle(el,style){el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Upgrade(el,changes){if(typeof el==='string'){try{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}};
    ${JSA}`
}

module.exports.Parser = Parser