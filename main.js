// Build the algorithm that reads two numbers from the keyboard,
// If the first is greater than the second, report their sum and
// difference, otherwise, inform the product and the
// division of the first by the second.
const n1 = parseFloat(prompt("Type the first number"));
const n2 = parseFloat(prompt("Type the Second number"));

if (n1 > n2) {
  let add = n1 + n2;
  let dif = n1 - n2;
  console.log(`The Addition result is: ${add}, and the difference between the numbers is: ${dif}`);
} else if (n1 < n2) {
  let mul = n1 * n2;
  let div = n1 / n2;
  console.log(`The product result is ${mul}, and the division result is: ${div}`);
} else {
  console.log("The two numbers are the same");
};

