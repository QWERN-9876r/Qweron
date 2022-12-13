const fs = require('fs'),
 Settings = require('./Settings').Settings,
 PostHtml = require('./Post html').PostHtml
var JSA = new Array();  // JavaScript Array

function Parser(lexemArray) {
    lexemArray.map(
        function( lexem ) {
        let JST = '';
        // ______________ Settings __________________
        if ( lexem.settings && lexem.settings.split(':')[1] ){
            [ lexem, JST ] = Settings( lexem, JST )
        }else {if(lexem.settings && lexem.settings.replace(/\s/g,'').replaceAll(/\n/g,'')){JST = `${JST}throw new Error('|  ${lexem.settings}  | --> are not settings');`}}
        // ______________ variables __________________
        if ( lexem.variable ){ 
            
            lexem.variable.map(function(v){
                lexem.script = lexem.script.replaceAll(`|${v.name}.Update()|`,`variables.${v.name}.Update()`)
                lexem.script = lexem.script.replaceAll(`|${v.name}|`,`variables.${v.name}.valueOf`) 
                lexem.html = lexem.html.replaceAll(`|${v.name}|`,`'+ variables.${v.name}.valueOf +'`)
            })
            
        }
        // ______________ Script __________________
        if ( lexem.script ) {
            if ( lexem.script.split('|ph|')[1] ) [ ST, phArray ] = PostHtml( lexem )
            JST = JST + ST
        }
        // ______________ Markup and styles  __________________
        
        if ( lexem.html && !lexem.style ) JST = JST + `document.getElementById("home").innerHTML = '${lexem.html.replaceAll(/\n/g,'').replaceAll(/\s+/g,' ')}';`
        if ( lexem.style ) JST = JST + 
        `document.getElementById("home").innerHTML = '${lexem.html.replaceAll(/\n/g,'').replaceAll(/\s+/g,' ')}<style>${lexem.style.replace(/\n/g,'').replaceAll(/\s+/g,' ')}</style>';`
        if ( phArray ) JST = JST + String(phArray).replaceAll(',','').replaceAll('|ph|','')
        
            
        

    JSA.push(JST)
    })
    // ______________ One page __________________
    if ( !lexemArray[0].import ) return JSA[0]
    var pageName
    // ______________ Many pages __________________
    if(lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, '') &&
     !Number(lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, ''))){
        pageName = lexemArray[0].namePage.replace(/\n/g,'').replace(/\s/g, '')
     } else {pageName = 'main'}
    // lexemArray.map(lexem => {lexem.import.map(im => {if(im.name === 'main'){throw new Error('the page cannot be called "main"')}})})
    var index = lexemArray[0].import.length - 1;
    // ______________ VariablesArray __________________
    variablesArray = new Array()
        lexemArray.map(
            lexem => {
        if(lexem.variable){
            lexem.variable.map(v => {
                variablesArray.push(`${v.name}: new Proxy({valueOf: ${v.content}, type: '${v.type}', Update(){Array.from(document.getElementsByClassName('c_${v.name}')).forEach(function(el){el.${v.type} = variables.${v.name}.valueOf})}},{set(target,prop,value){target[prop] = value;target.Update()}})`)
                })
            }
        })
     // ______________ Write js file __________________
    fs.writeFile('singleScript.js', 
   `const variables = {${variablesArray}}
 
    ${JSA.map(function(jst){
        if(jst === JSA[0]){
            return "function "+pageName+"(){" + jst +"}/*"
        }
        return "*/function "+ lexemArray[0].import[index--
        ].name + "(){" + jst +"}/*"
    })}
    */${pageName}()
    ` , function(err){if(err){throw err}})
    console.log('\x1b[1m', "\x1b[35m", 'YEEEEEEEEEEEEEEES!!!')
}

module.exports.Parser = Parser