var output = document.getElementById('output')
var myData = '[{"question":"What is the Full-form of JSON?", "answers": ["JavaScript Object Notation","JavaScript Object Naration","JavaScript Objective Notation","JavaScript Object Notion"],"correct": 0}' ,
'{"question": "Inside which HTML element do we put the JavaScript?","answers": ["<JavaScript>","<js>","<Script>","<Scripting>"],"correct": 2}]';
var myObj = JSON.parse(myData);

console.log(myObj);   