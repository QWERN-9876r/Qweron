
    const Primitive={Big(value){++value}};function CreateStyle(el,style){el.style.width=style.width;el.style.height=style.height;el.style.background=style.background;el.style.border=style.border;el.style.borderRadius=style.borderRadius;if(style.fontFamily){el.style.fontFamily=style.fontFamily}el.style.color=style.color;el.style.backgroundColor=style.backgroundColor;el.style.position=style.position;el.style.top=style.top;el.style.left=style.left;el.style.right=style.right;el.style.bottom=style.bottom;el.style.padding=style.padding;el.style.fontSize=style.fontSize;el.style.paddingLeft=style.paddingLeft;el.style.paddingRight=style.paddingRight;el.style.paddingTop=style.paddingTop;el.style.paddingBottom=style.paddingBottom;el.style.margin=style.margin;el.style.marginLeft=style.marginLeft;el.style.marginRight=style.marginRight;el.style.marginTop=style.marginTop;el.style.marginBottom=style.marginBottom};function Upgrade(el,changes){if(typeof el==='string'){try{el=document.querySelector(el)}catch{throw new Error('The specified element is missing')}};if(changes.style){CreateStyle(el,changes.style)};if(changes.txt){el.textContent=changes.txt};if(changes.onclick){el.onclick=changes.onclick};if(changes.placeHolder){el.placeHolder=changes.placeHolder}};
    document.getElementById("home").innerHTML = '<div class="container">    <h1 id="hw"> Hello world </h1>    <button> button </button>    </div> <style>button {color: red;}.container {    margin: 2rem;}</style>';; var what = 'what' ; Upgrade(document.getElementById("hw"), {txt: 'Hello'});;