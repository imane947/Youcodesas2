const prompt = require('prompt-sync')();

let annee = parseInt(prompt("entrez la nombre de année"));
console.log(`entre le choix
   .1 calcule le mois
   .2 calcule le jours
   .3 calcule le heurs
   .4 calcule le mintes
   .5 calcule le secondes `);
let choix = parseInt(prompt(""));
switch(choix){
 case 1 :
    let A=annee * 12
    console.log(`le nombre de mois :${A}`);
    break;
case 2 :
    let B = annee * 365;
    console.log(`le nombre de jours :${B}`);
    break;
case 3:
    let C=annee * 365 * 24;
    console.log(`le nombre de jours :${C}`);
case 4:
    let D = annee * 365 * 24 * 60;
    console.log(`le nombre de mintes :${D}`);
    break;
case 5:
    let F =annee * 365 * 24 * 60 * 60;
    console.log(`le nombre de secondes :${F}`);
    break;
}

