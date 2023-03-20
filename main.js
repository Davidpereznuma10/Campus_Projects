//Develop a cyclical program that captures a data
// number each time, and accumulate them. The program will
// stops when the user types a zero. The program must
// show: THE SUM OF THE VALUES, THE VALUE OF THE
// AVERAGE, HOW MANY VALUES WERE ENTERED, GREATER
// VALUE AND LESS VALUE.

const myArray = [];
let addNum = 1;

while (addNum !== 0) {
    addNum = parseInt(prompt("Type a number"));
    myArray.push(addNum);
};
myArray.pop(0);

const add = myArray.reduce((total, num) => total + num, 0);
const prom = add/myArray.length;
const max = Math.max(...myArray);
const min = Math.min(...myArray);

console.log(`The addition Result is= ${add}`);
console.log(`The average is= ${prom}`);
console.log(`The array length is= ${myArray.length}`);
console.log(`The max number into the array is= ${max}`);
console.log(`The min number into the array is= ${min}`)
