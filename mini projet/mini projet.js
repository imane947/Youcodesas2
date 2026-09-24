const prompt = require("prompt-sync")();

let apprenants = [];

let prenom = prompt("Entrez le prénom : ");
let note = Number(prompt("Entrez la note : "));

let apprenant = {
    prenom: prenom,
    note: note
};

apprenants.push(apprenant);

console.log(apprenants);