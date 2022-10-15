module.exports.Qweron = function() {
    const Primitive = {
        upgrade(el, changes){
            if(changes.style){CreateStyle(el, changes.style)}
            if(changes.txt){el.textContent = changes.txt}
            if(changes.onclick){el.onclick = changes.onclick}
            if(changes.placeHolder){el.placeHolder = changes.placeHolder}
        }
    } 
}