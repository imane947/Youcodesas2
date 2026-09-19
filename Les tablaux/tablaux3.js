const prompt = require('prompt-sync')();

let nombre = prompt("entrez le nombre d'éléments d'un tableau");
const Tableau = [];
let s = 0;
for(let i=0 ; i< nombre; i++){
let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
    Tableau.push(valeurs);
    s+=valeurs;
}
console.log("Voici votre Tableau :");
console.log(s);