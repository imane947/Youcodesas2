
const arr = [1,5,11,9,4]
let x = 0;
for(let j=0 ; j<arr.length ; j++){
    for(let i=0 ; i<arr.length-i-1 ; i++){
     if(arr[i]  > arr[i+1] ){
         x = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=x
     }
    }
}
console.log(arr)