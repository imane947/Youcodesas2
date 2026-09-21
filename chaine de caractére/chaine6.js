const prompt = require('prompt-sync')();
let n = prompt("entrez un phase :");
let compter = 0;
let x = prompt("entre un caractére :");
for(let i = 0 ; i<n.length; i++){
    if(n[i] === x){
        compter++;
    }
}
console.log(compter)
