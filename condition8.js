const prompt = require('prompt-sync')();

let  moyenne = prompt("entrez la moyenne");
if(moyenne < 10){
    console.log("recalé");
}else if(moyenne >= 10 && moyenne < 12){
    console.log("passable");
}else if(moyenne >= 12 && moyenne < 14){
    console.log("entrez  assez bien");
}else if( moyenne >= 14 && moyenne < 16 ){
    console.log("bien");
}else if(moyenne >= 16){
    console.log("mention très bien");
}