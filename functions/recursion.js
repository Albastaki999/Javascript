let count = 0;

function greet() {
  // Base case - something that stops the recursion
  if (count == 5) {
    return;
  }
  
  //   General Case
  count++;
  console.log(count);
  greet();
}

greet();
