const prompt = require('prompt-sync')();

let vitess = parseFloat(prompt("Entrez la  vitesse en kilomètres par heure (km/h)  :"));
let m = vitess * 0.27778;
console.log(`Alors entrez la vitess en m : ${m}`);