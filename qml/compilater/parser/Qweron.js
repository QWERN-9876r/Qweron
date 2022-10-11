module.exports.Qweron = function() {
    const Data = {
        VertualTree: new Array(), // Вертуальное дерево
        Create: Object.create(null), // Создать
        get: Object.create(null), // Получить
        process: Object.create(null), // Запуск процессов
        settings: Object.create(null) // Настройки
    }
    
    // Настройки по умолчанию
    Data.settings.ErrorMessages = true
    // Типы данных
    const fun = typeof function(){},
    obj = typeof {};

    function CreateStyle(el, style) {     
        el.style.width = style.width;
        el.style.height = style.height;
        el.style.background = style.background;
        el.style.border = style.border;
        el.style.borderRadius = style.borderRadius;
        if(style.fontFamily){el.style.fontFamily = style.fontFamily;}
        el.style.color = style.color;
        el.style.backgroundColor = style.backgroundColor;
        el.style.position = style.position;
        el.style.top = style.top;
        el.style.left = style.left;
        el.style.right = style.right;
        el.style.bottom = style.bottom;
        el.style.padding = style.padding;
        el.style.fontSize = style.fontSize;
        el.style.paddingLeft = style.paddingLeft;
        el.style.paddingRight = style.paddingRight;
        el.style.paddingTop = style.paddingTop;
        el.style.paddingBottom = style.paddingBottom;
        el.style.margin = style.margin;
        el.style.marginLeft = style.marginLeft;
        el.style.marginRight = style.marginRight;
        el.style.marginTop = style.marginTop;
        el.style.marginBottom = style.marginBottom;
    }
    Data.process.render = function () {
        document.getElementById('home').append(...VertualTree);
    }
    Data.Create.Home = function(styleObj, className) {
        try {
            const home = document.createElement('div');
            if(className){home.className = className;}
            home.style.position = 'absolute'
            Data.get.home = function () {return home}
            if ( typeof styleObj === obj ){CreateStyle(home, styleObj)}
            Data.VertualTree.push(home)
            process.render()
            return home;
        } catch(err) {
            throw new Error(`Ошибка в создании дома
            ${err}`)
        }  
    }        
    Data.Create.html = function(el, children, features){
        try{
            const element = document.createElement(el)
            if(features && typeof features === obj){
                if(features.className){element.className = features.className}
                if(features.txt){element.innerHTML = features.txt} // В txt можно передать html
                if(features.src){element.src = features.src}
                if(features.onclick){element.onclick = features.onclick}
                if(typeof features.style === obj){CreateStyle(element, features.style)}}
            if(typeof children === obj){children.map(child => {
                element.append(child)
            })
                }
            Data.VertualTree[0].append(element)
            return element
        }catch(err){
            throw new Error(`ошибка в создании html елемента
            ${err}`)
        }
        
    }
    Data.process.update = function(el, changes) {
        if(changes.style){CreateStyle(el, changes.style)}
        if(changes.txt){el.textContent = changes.txt}
        if(changes.onclick){el.onclick = changes.onclick}
        if(changes.placeHolder){el.placeHolder = changes.placeHolder}
    }
    return Data
}