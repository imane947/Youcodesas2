const prompt = require('prompt-sync')();

let x = 1
function factouriel(nbr){
    for(let i=1 ; i<= nbr ; i++){
        x*=i
    }
    return x
     
}

let n = prompt("entrez la valeurs :");
console.log(factouriel(n))