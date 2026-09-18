const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez la nombre :"));
for (let i = 1; i <= n*2; i+=2) {
    
  console.log(i);  
}