const prompt = require('prompt-sync')();

let s = parseInt(prompt("entrez positif pour  la factorielle :"));
let factorielle = 1;
for (let i = 1; i <= s; i++) {
    factorielle *= i;
}
console.log(`${s}! = ${factorielle}`);