let input = ["apple", "banana", "apple", "orange", "banana"];
// Output: {"apple": 2, "banana": 2, "orange": 1}
let input2 = ["cat", "dog", "cat", "cat", "dog", "fish"];
// Output: {"cat": 3, "dog": 2, "fish": 1}
let input3 = ["apple", "apple", "apple"];
// Output: {"apple": 3}

// Implement a function that takes a list of words as input and returns
// a hash map containing the frequency of each unique word.

function wordFrequency(arr) {
  let map = {};
  for (const item of arr) {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  }
  return map;
}
console.log(wordFrequency(input));
