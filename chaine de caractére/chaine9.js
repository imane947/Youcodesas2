const prompt = require('prompt-sync')();

let n = prompt("entrez un phase :");
let resultat ="";
for(let i = 0 ; i < n.length  ; i++){
    console.log([i])
    if( n[i] !== " "){
        resultat+= n[i];
    }
}
console.log(resultat);