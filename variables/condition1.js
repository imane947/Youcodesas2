const prompt = require('prompt-sync')();

let nombre = prompt("entrez  le nombre");
if(nombre % 2 === 0){
    console.log("paire");
}else{
    console.log("impaire");
}