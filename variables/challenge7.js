const prompt = require('prompt-sync')();

let nmb1 = prompt("entrez le premier nombre");
let nmb2 = prompt("entrer la deuxieme nombre ");
let nmb3 = prompt("entrer la deuxieme nombre ");
let moyenne = (nmb1 * 2 + nmb2 * 3 + nmb3 * 5) / 10 ;
console.log(`donner la moyenne :${moyenne}`);
