const prompt = require('prompt-sync')();

let n = prompt("entrez un phase :");
let x = prompt("entrez un phase :");
let resultat ="";
for(let i=0 ; i<n.length; i++){
    resultat = n + x
}
console.log(resultat)