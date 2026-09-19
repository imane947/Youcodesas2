const prompt = require('prompt-sync')();

let nombre = prompt("entrez les element de tablaux");
const tablaux = []
let min;
for(let i=0 ; i<nombre; i++){
let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
tablaux.push(valeurs);
min=tablaux[0];
if(tablaux[i] < min){

    min = tablaux[i];
}
}
console.log("Voici votre Tableau :");
console.log(min)