// program to find the product of all prime numbers in an array


let arr = [1,2,3,5,7,8,9,10,11];
let product=1;
let store = [];
let count;

for(let i=0; i<arr.length; i++){
   
    count = 0;
    for(let j=1; j<=arr[i]; j++){
        if(arr[i]%j == 0){
            count++;
        }
    }
    if(count == 2){
        store.push(arr[i]);
    }  
}

for(let k=0; k<store.length; k++){
    product *= store[k];
}
console.log(product);