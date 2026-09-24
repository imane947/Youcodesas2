const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez le nombre de tablaux "));
const nombres =[];
let x = Number(prompt("entrez le elements tu va recherche "));
for(let i=0 ; i<n ; i++){
    let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
    nombres.push(valeurs);
    }
