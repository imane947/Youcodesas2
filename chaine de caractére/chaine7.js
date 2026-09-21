

const prompt = require('prompt-sync')();

let n = prompt("entrez un phase :");
let code=0;
let text="";
console.log(n);
for(let i = 0; i<n.length; i++){
    if( n.charCodeAt(i) >= 65 && n.charCodeAt(i) <=90){
        code = n.charCodeAt(i) +32 ;
        text+= String.fromCharCode(code);
    }
}
console.log(text)