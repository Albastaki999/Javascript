let word = "racecar";

// A palindrome is a word that results back to the same word when spelled backwards
// Example 1: racecar spelled backwards is again racecar, so racecar is a palindrome, other examples are "mom", "dad"
// Example 2: abcd spelled backwards is dcba, abcd is not equal to dcba, hence not a palindrome

let l = 0;
let r = word.length - 1;

while (l < r) {
  if (word.charAt(l) != word.charAt(r)) {
    console.log("Not a palindrome");
    return;
  }
  l++;
  r--;
}

console.log("A Palindrome");
