const prompt = require('prompt-sync')();
let n = prompt("entrez un phase :");
let x = "";
for (let i= n.length -1 ; i>=0 ; i--){
    x=x+n[i]
}
console.log(x)