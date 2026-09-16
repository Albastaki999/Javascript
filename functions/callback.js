const getName = () => "Rashid";

// getTheName -> a function passed as an argument, it's called callback
// greet -> a function that accepts another function as an argument, is called Higher order function

const greet = (getTheName) => {
  console.log("Hello", getTheName());
};

greet(getName);
greet(() => 1 + 2)
