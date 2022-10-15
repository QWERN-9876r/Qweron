var JSA = new Array(); // JavaScript Array


function Parser(lexem) {
    if(lexem.html && !lexem.style){JSA.push(`document.getElementById("home").innerHTML = '${lexem.html.replace(/\n/g,'')}';`)}
    if(lexem.script){
        if(lexem.script.split('const')[1]) {
            const data = String(lexem.script.split('const')[1]).split(';')[0],
             name = String(data).split('=')[0].replace(/\s/g,''),
             test = {f: 'f'};
            var pData = new Proxy(test, {
                get(target, prop, value) {
                    const Obj = new Object(Primitive)
                    console.log(value)
                    Obj.valueOf = value
                    return Obj
                },
                set(){
                    return Obj.valueOf
                    
                }
             })
             pData = {num: 10}
             console.log(pData)
        }
        if(lexem.script.split('var')[1]) {
            
        }
        if(lexem.script.split('let')[1]) {
            
        }
        JSA.push(lexem.script.replace(/\n/g,''))}
    if(lexem.style){JSA.push(`document.getElementById("home").innerHTML = '${lexem.html.replace(/\n/g,'')}<style>${lexem.style.replace(/\n/g,'')}</style>';`)}
    var string = '';
    JSA.map(str => {
        string = string + str
    })
    return `
    ${string}`
}

module.exports.Parser = Parser