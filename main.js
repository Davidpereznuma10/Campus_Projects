//Build the algorithm for a program that inputs three
//grades of a student, if the average is less than or equal to 3.9
//display a message "Study", otherwise a message that
//say "scholarship"

let n1=parseFloat(prompt("input your firs note"));
let n2=parseFloat(prompt("input your second note"));
let n3=parseFloat(prompt("input your third note"));
let average=((n1+n2+n3)/3.0);
if (average<=3.9) {
    console.log(`you must study more, because your average is: ${average}`);
    
}else {
    console.log(`You have a scholarship, because your average is: ${average}`);
}