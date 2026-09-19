const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez lenombre de tablaux "));
const nombres =[];

for(let i=0 ; i<n ; i++){
    let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
    nombres.push(valeurs);
 }
 const inv=nombres.reverse();
 console.log(nombres)
 console.log(inv)