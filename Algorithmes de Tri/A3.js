let n = "Absdeifgh"
let a="htdtdttfdt";
const t =[];
const r=[];
let code =0;
let cde=0;
if(a.length===n.length){
for(let i=0 ; i<n.length ; i++){
    code=n.charCodeAt(i) 
    cde=a.charCodeAt(i)
    t.push(code)
    r.push(cde)

}
console.log(r)
console.log(t)
}else {
    console.log("le deux phase pas edontique");
}