const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrez lenombre de tablaux "));
const nombres =[];
let x;
for(let i=0 ; i<n ; i++){
    let valeurs = Number(prompt(`entrez le elements n° ${i+1}:`));
    nombres.push(valeurs);
}

for(let i=0 ; i<n ; i++){
    for (let j = i + 1; j < n; j++) {
   if (nombres[i] > nombres[j]) {
        x = nombres[i];
        nombres[i] = nombres[j];
        nombres[j] = x ;
      
   }    

}
}



console.log(nombres);
