//Build the algorithm that requests the name and age of 3
//people and determine the name of the oldest person.

const people=[
    {Name:(prompt("Type the name")), Age:(parseFloat(prompt("Type the age")))},
    {Name:(prompt("Type the name")), Age:(parseFloat(prompt("Type the age")))},
    {Name:(prompt("Type the name")), Age:(parseFloat(prompt("Type the age")))}
  ];
  
  const Ages = people.map(item=>item.Age)
  const max = Math.max(...Ages);
  const oldest = people.find(function(element) {
    return element.Age === max;
  });
  
  console.log(oldest);
  