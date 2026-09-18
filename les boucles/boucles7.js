const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez le nombre de entier :"));
let i = 0;
while (n > 0) {
    i = i * 10 + n % 10;
    n = Math.floor (n / 10) ;
}
console.log(i);
