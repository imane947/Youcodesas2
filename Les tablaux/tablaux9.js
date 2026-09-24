const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez lenombre de tablaux "));
const nombres =[];
let x = 0;
let j = n.length;

for(let i=0 ; i<n ; i++){
    let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
    nombres.push(valeurs);
    x= nombres[i]
    nombres[i]=nombres[j]
    nombres[j]=x
 }
 
 console.log(nombres)
 console.log(i)