const prompt = require('prompt-sync')(); 

let tempCelsius = parseFloat(prompt("Entrez la température en Celsius :"));
let tempKelvin = tempCelsius + 273.15;
console.log(`${tempCelsius}°C correspond à ${tempKelvin}K`);