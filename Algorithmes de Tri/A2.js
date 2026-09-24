let n = "nom"
let x = "mon"
cont = 0;
for(let i=0 ; i<n.length; i++){
    for(let j=0 ; j<x.length ; j++ ){
        if(n[i] === x[j])
            cont++
    }
}
console.log(cont===x.length);
console.log("les nombre identique");