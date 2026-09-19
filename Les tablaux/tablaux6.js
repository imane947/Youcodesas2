const prompt = require('prompt-sync')();

let nombre = prompt("entrez les element de tablaux");
let x = prompt("entrez  le nombre de la multipliction");

const tablaux = []

for(let i=0 ; i<nombre; i++){
let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
tablaux.push(valeurs * x);
}
console.log("Voici votre Tableau :");

console.log(`vouci votre tableau ${tablaux}:`);
console.log(tablaux);
