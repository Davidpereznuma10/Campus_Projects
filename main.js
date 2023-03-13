// Build the algorithm to determine the voltage of a
//circuit based on resistance and current.
const R = prompt(`Type the value of Resistance in ohms `);
const I = prompt(`Type the value of Current`);
const V = I * R;

console.log(`The voltage is ${V}`)
