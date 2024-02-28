let input = [2, 7, 11, 15];
let sum = 9;
// Output: [0, 1] (as 2 + 7 = 9)
let input2 = [3, 2, 4];
let sum2 = 6;
// Output: [1, 2] (as 2 + 4 = 6)
let input3 = [1, 5, 3, 8];
let sum3 = 9;
// Output: [1, 3] (as 5 + 4 = 9)

/*Implement a function that takes a list of integers and a 
target sum. Find two numbers in the list that add up to the 
target sum and return their indices. */

function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = target - arr[i];
    if (map[temp] != undefined) {
      return [map[temp], i];
    }
    if (!map[arr[i]]) {
      map[arr[i]] = i;
    }
  }
  return [];
}

console.log(twoSum(input3, sum3));
