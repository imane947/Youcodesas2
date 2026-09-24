
const n =[1,5,10,9]
let x = 0;

for(let i=0 ; i< n.length ; i++){
    for(let j=0 ; j<n.length-i-1 ;j++){
        if(n[j]  > n[j+1]){
             x= n[j]
            n[j]=n[j +1]
            n[j+1]=x
        }
    }
}
console.log(n)