const prompt = require('prompt-sync')();

let valeur1 =  prompt("Entrez la premier valeur");
let valeur2 = prompt("Entrez la deuxieme valeur");
let somme = valeur1 + valeur2;
console.log(`calceur la somme :${somme}`);
if(valeur1 === valeur2){
    console.log(`triple de la somme :${somme*3}`);
}else{
    console.log(" les deux valeurs sont identiques");
}