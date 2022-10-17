module.exports.Qweron = function() {
    const Primitive = {
        Upgrade(el, changes){
            if(typeof el === 'string') {
                try{el = document.querySelector(el)}catch{throw new Error('The specified element is missing')}
            }
            if(changes.style){CreateStyle(el, changes.style)};
            if(changes.txt){el.textContent = changes.txt};
            if(changes.onclick){el.onclick = changes.onclick};
            if(changes.placeHolder){el.placeHolder = changes.placeHolder};
        }
    } 
}
