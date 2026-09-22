

function  iman(rah){
    let a = 0;
    let b= 1;
    for(let i=0; i < rah ; i++){
    let f =a + b;
    a=b;
    b=f;

}
return a
}
console.log(iman(7))