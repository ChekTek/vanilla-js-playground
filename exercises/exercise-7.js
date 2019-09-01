/**
  Write two functions to calculate the nth       fibonacci number. Iterative VS Recursive.
*/

const fibRecursive = function(n){
  if(n==0) return 0;
  if(n==1) return 1
  return fibRecursive(n-1)+ fibRecursive(n-2);
}

const fibIterative = function(n){
  let result = 0;
  let left = 0;
  let right = 1;
  
  for(let i = 1; i<n; i++){
    result = left + right;
    left = right;
    right = result;
  }
  return result;
}

let test = fibRecursive(8);
let result = fibIterative(8);

console.log({test});
console.log({result});