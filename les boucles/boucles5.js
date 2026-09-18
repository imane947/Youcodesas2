const prompt = require('prompt-sync')();

let n = parseInt(prompt("  entrez le nombre  élevé():"));
let p = parseInt(prompt("  entrez la puissance :"));
let x = 1
for (let i=1;i<=p; i++){
     x= x*n
}
console.log(x)