// Program to merge two arrays and store them in the third array


let arr1 = [1,5,7,9];
let arr2 = [2,4,6,10,12,15];
let arr3 = [];

for(let i=0; i<arr1.length; i++){
   arr3.push(arr1[i]);     
}

for(let j=0; j<arr2.length; j++){
    arr3.push(arr2[j]);  
}

console.log(arr3);