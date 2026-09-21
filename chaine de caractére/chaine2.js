const prompt = require('prompt-sync')();

let n = prompt("entrez un test :");
let compteur = 0;

for (let caractere of n) {
    compteur++;
}

console.log(`La longueur de "${n}" est de ${compteur} caractères.`);