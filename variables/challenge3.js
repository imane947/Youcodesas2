const prompt = require('prompt-sync')();

let km = parseFloat(prompt("Entrez la distance en kilomètres:"));
let Yards = km * 1093.61;
console.log(`Alors la distance en Yards :${Yards}`); 