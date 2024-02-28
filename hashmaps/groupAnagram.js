let input = ["listen", "silent", "enlist", "hello", "lives"];
// Output: [["listen", "silent", "enlist"], ["hello"], ["lives"]]
let input2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

/* Implement a function that takes a list of strings and groups anagrams
 together. Two strings are considered anagrams if they have the same 
 characters but in a different order.*/

function anagram(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [arr[i]];
    } else {
      map[sorted].push(arr[i]);
    }
  }
  return Object.values(map);
}

console.log(anagram(input2));
