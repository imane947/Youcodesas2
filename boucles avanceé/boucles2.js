const prompt = require('prompt-sync')();

let n = prompt("entrez le nombre de ligne:");
for (let i = 1; i <= n; i++){
    let espaces =" ". repeat(n - i);
    let etoiles = "*".repeat(2 * i - 1);
     console.log(espaces + etoiles);
}