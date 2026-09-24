const prompt = require('prompt-sync')();

let C = parseFloat(prompt("Entrez la température en Celsius :"));
if (C<0) {
    console.log("Solide");
 } if (C >= 0  && C < 100 ) {
    console.log("liquide");
 } else {
    console.log("Gaz")
}