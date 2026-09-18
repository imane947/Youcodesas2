const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez la nombre pour calcule la somme :"));
let somme = 0;
for (let  i = 1; i <= n; i++) {
     somme += i ;   
 }    
console.log(`${somme}`);
