const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez lenombre de tablaux "));
const nombres =[];
const x = [];
for(let i=0 ; i<n ; i++){
    let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
    nombres.push(valeurs);
    
}
for(let i= 0 ; i<nombres.length; i++) {
    x.push(nombres[i]);
}   
console.log(nombres);
console.log(x);