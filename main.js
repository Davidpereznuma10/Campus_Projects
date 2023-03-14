// Build the algorithm in Javascript for a program
// for any number of students reading the name,
// the sex and the final grade and find the student with the highest
// grade and the student with the lowest grade and how many were
// men and how many women
const num = parseFloat(prompt("How many students do you want to type?"));
let Students = [];
for (let i = 0; i < num; i++) {
  let student = {
    Name: prompt(`Type the student ${i + 1} name`),
    Gender: prompt(`Type letter of the student ${i + 1} gender\n M: Male\n F: Female`),
    Grade: parseFloat(prompt(`Type the student ${i + 1} grade`)),
  };
  Students.push(student);
}
console.table(Students);
const grades = Students.map(item => item.Grade);
const max = Math.max(...grades);
const most = Students.find(function(element) {
  return element.Grade === max;});
const min = Math.min(...grades);
const worst = Students.find(function(element) {
  return element.Grade === min;});
const genders = Students.map(item => item.Gender);
const male = Students.filter(item => item.Gender.toLowerCase() === "m" || item.Gender.toLowerCase() === "male");
const female = Students.filter(item => item.Gender.toLowerCase() === "f" || item.Gender.toLowerCase() === "female");
console.log(`The student with the highest grade is ${most.Name}, and the lowest is ${worst.Name}.\nThere are ${male.length} males and ${female.length} females.`);