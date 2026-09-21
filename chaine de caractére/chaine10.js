const prompt = require('prompt-sync')();

let n = prompt("entrez un phase :");
let sous = prompt("entre sous chaine:");
let trouve = true ;
for(let i= 0 ; i<n.length ; i++){
if(trouve === true){
    console.log(" sous chaine trouve")
    break;
}else {
    console.log(" sont pas trouvé")
    break;
}
}