const variables = {Counter: new Proxy({valueOf:  0 , type: 'textContent', Update(){Array.from(document.getElementsByClassName('c_Counter')).forEach(function(el){el.textContent = variables.Counter.valueOf})}},{set(target,prop,value){target[prop] = value;target.Update()}}),Color: new Proxy({valueOf:  'red' , type: 'style.color', Update(){Array.from(document.getElementsByClassName('c_Color')).forEach(function(el){el.style.color = variables.Color.valueOf})}},{set(target,prop,value){target[prop] = value;target.Update()}}),What: new Proxy({valueOf:  'what' , type: 'textContent', Update(){Array.from(document.getElementsByClassName('c_What')).forEach(function(el){el.textContent = variables.What.valueOf})}},{set(target,prop,value){target[prop] = value;target.Update()}})}
 
    function __Main__(){document.getElementById("home").innerHTML = ' <div class="top"><nav> <h4 onclick="About()">About</h4> <h4 onclick="Documentation()">Documentation</h4> <h4 onclick="__Main__()">Page3</h4> <h4>Page4</h4></nav></div> <div class="container"> <div class="mainLogo"> <img src="./SingleScript.png" > <button>Repository from Github</button> </div> <div class="text"> <p class="c_What">SingleScript - It is a programming language designed to solve WEB development tasks!</p> <h1 class="c_Counter c_Color">'+ variables.Counter.valueOf +'</h1> <button id="btn" class="c_Counter c_Color">button</button> </div> </div> <style> .top { position: fixed; left: 0; top: 0; width: 100%; background-color: rgb(19, 16, 16); display: flex; flex-wrap: wrap;}nav { color: white; width: 70%; justify-content: space-between; display: flex;}nav h4 { margin-left: 8px; cursor: pointer; font-family: sans-serif;}.mainLogo img { position: relative; top: -15%; width: 25rem; height: 110%; align-items: center; left: 32.5%;}.mainLogo button { transition: 0.4s; position: relative; top: -20%; left: 10%; border-radius: 1rem; background-color: black; color: white; font-size: 1rem; font-family: sans-serif; padding: 8px; cursor: pointer;}.mainLogo button:hover { background-color: rgb(204, 195, 195); color: rgb(19, 16, 16);}.mainLogo { position: absolute; left: 0; top: 10%; height: 60%; width: 100%;}.container { margin: 1rem;}.text { position: absolute; top: 70%; font-family: sans-serif;} </style>';

function plusCounte() {
    ++variables.Counter.valueOf
    variables.Color.valueOf = 'blue'
    variables.What.valueOf = variables.What.valueOf + ' what'
}
 
 const what = 'what'
  document.getElementById('btn').onclick = plusCounte
  console.log(document.getElementsByClassName('c_Counter'))
 
;}/*,*/function Documentation(){document.getElementById("home").innerHTML = '<div class="container"> <div class="top"><nav> <h4 onclick="About()">About</h4> <h4 onclick="Documentation()">Documentation</h4> <h4 onclick="__Main__()">Page3</h4> <h4>Page4</h4></nav></div> <main> <p>The main idea of SingleScript is to combine a large number of modules under a single standard, as well as optimize their work and combine all pages around the main page. SingleScript creates a single-page application. It is easy to learn because it uses html css and js, but at the same time adds a large number of solutions. Also in SingleScript, all files and pages are not separated and form a single structure in which all pages interact with each other without barriers. When creating a project, the language combines all the pages around the main one, most of the program is enclosed in it, and the remaining pages are very light and at the same time cannot exist without the main one, which gives them reused parts of the code and other data.</p> </main> </div> <style> .top { position: fixed; left: 0; top: 0; width: 100%; background-color: rgb(19, 16, 16); display: flex; flex-wrap: wrap;}nav { color: white; width: 70%; justify-content: space-between; display: flex;}nav h4 { margin-left: 8px; cursor: pointer; font-family: sans-serif;}.mainLogo img { position: relative; top: -15%; width: 25rem; height: 110%; align-items: center; left: 32.5%;}.mainLogo button { transition: 0.4s; position: relative; top: -20%; left: 10%; border-radius: 1rem; background-color: black; color: white; font-size: 1rem; font-family: sans-serif; padding: 8px; cursor: pointer;}.mainLogo button:hover { background-color: rgb(204, 195, 195); color: rgb(19, 16, 16);}.mainLogo { position: absolute; left: 0; top: 10%; height: 60%; width: 100%;}.container { margin: 1rem;}.text { position: absolute; top: 70%; font-family: sans-serif;} main { display: flex; }</style>';

function plusCounte() {
    ++variables.Counter.valueOf
    variables.Color.valueOf = 'blue'
    variables.What.valueOf = variables.What.valueOf + ' what'
}
 
 const what = 'what'
  document.getElementById('btn').onclick = plusCounte
  console.log(document.getElementsByClassName('c_Counter'))
 
;}/*,*/function About(){document.getElementById("home").innerHTML = '<div class="container"> <div class="top"><nav> <h4 onclick="About()">About</h4> <h4 onclick="Documentation()">Documentation</h4> <h4 onclick="__Main__()">Page3</h4> <h4>Page4</h4></nav></div> <main> <p>The main idea of SingleScript is to combine a large number of modules under a single standard, as well as optimize their work and combine all pages around the main page. SingleScript creates a single-page application. It is easy to learn because it uses html css and js, but at the same time adds a large number of solutions. Also in SingleScript, all files and pages are not separated and form a single structure in which all pages interact with each other without barriers. When creating a project, the language combines all the pages around the main one, most of the program is enclosed in it, and the remaining pages are very light and at the same time cannot exist without the main one, which gives them reused parts of the code and other data.</p> </main> </div> <style> .top { position: fixed; left: 0; top: 0; width: 100%; background-color: rgb(19, 16, 16); display: flex; flex-wrap: wrap;}nav { color: white; width: 70%; justify-content: space-between; display: flex;}nav h4 { margin-left: 8px; cursor: pointer; font-family: sans-serif;}.mainLogo img { position: relative; top: -15%; width: 25rem; height: 110%; align-items: center; left: 32.5%;}.mainLogo button { transition: 0.4s; position: relative; top: -20%; left: 10%; border-radius: 1rem; background-color: black; color: white; font-size: 1rem; font-family: sans-serif; padding: 8px; cursor: pointer;}.mainLogo button:hover { background-color: rgb(204, 195, 195); color: rgb(19, 16, 16);}.mainLogo { position: absolute; left: 0; top: 10%; height: 60%; width: 100%;}.container { margin: 1rem;}.text { position: absolute; top: 70%; font-family: sans-serif;} main { display: flex; }</style>';

function plusCounte() {
    ++variables.Counter.valueOf
    variables.Color.valueOf = 'blue'
    variables.What.valueOf = variables.What.valueOf + ' what'
}
 
 const what = 'what'
  document.getElementById('btn').onclick = plusCounte
  console.log(document.getElementsByClassName('c_Counter'))
 
;}/*
    */__Main__()
    