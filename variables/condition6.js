const prompt = require('prompt-sync')();

 let nombre = parseInt(prompt("entrez la nombre"));
 if(nombre < 0){
    console.log("négatif");
 }else if(nombre > 0){
    console.log("positif");
 }else{
    console.log(" le nombre est égal à zéro");
 }