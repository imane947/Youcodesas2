const prompt = require('prompt-sync')();

let nombre = parseInt(prompt("Entrez le nombre pour la table de multiplication :"));
console.log(`Table de multiplication de ${nombre} :`);
for (let i = 1; i <= 10; i++) {
    let resultat = nombre * i;
 console.log(`${nombre} * ${i} = ${resultat}`);
 }