const prompt = require('prompt-sync')();

let n = prompt("entrez un phase :");
let x = prompt ("entrez un phase2 :");
for( let i=0 ; i<n.length ; i++){
if(n===x){
    console.log(" egales")
break;
}else{
    console.log("sont egales")
    break;
}
}
