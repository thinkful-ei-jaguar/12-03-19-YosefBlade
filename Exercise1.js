'use strict';

function min(arr) {
  let n = 0;
  let smallest = arr[0];
  while (n < arr.length) {
    if (arr[n] < smallest) {
      smallest = arr[n];
    }
    n++;
  }
  
  return smallest;
}

function max(arr) {
  let n = 0;
  let largest = arr[0];
  while (n < arr.length) {
    if (arr[n] > largest) {
      largest = arr[n];
    }
    n++;
  }
 
  return largest;
}

const output = [1, 0, 5, 3, 9, 87, 3];
console.log(min(output));
console.log(max(output));

