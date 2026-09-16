let str = "AB";

console.log(palindromeFunction(str));

var palindromeFunction = function (str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str.charAt(l) != str.charAt(r)) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
