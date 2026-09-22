const prompt = require('prompt-sync')();

let x = Number(prompt("entrez la valeur de x :"));
let y = Number(prompt("entrez la valeurs de x :"));
const point = {
    x :x,
    y :y,
}
point.x = prompt("entrez la valeurs modifie :");
point.y = prompt("entrez la valeurs modifier :");

console.log(point.x);
console.log(point.y);