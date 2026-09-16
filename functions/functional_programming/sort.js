let arr = [10, 2, -1, 100, 9, 76, 22, 1]

// By default sorts in lexicographical/dictionary order
// arr.sort()
arr.sort((a, b) => a - b)
// a - b
// negative -> choose a
// zero -> choose any
// positive -> choose b

console.log(arr);
