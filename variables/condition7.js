const prompt = require('prompt-sync')();

let alphabet = prompt("entrez la alphabet");
if(alphabet >= "A" && alphabet <= "Z"){
    console.log("majuscule");
}else{
    console.log("minuscule");
}