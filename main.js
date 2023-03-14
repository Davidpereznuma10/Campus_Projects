// N athletes have advanced to triple jump finals in the games
// 2022 Women's Olympians. Design a program that asks for
// keyboard the names of each finalist athlete and in turn, their
// marks of the jump in meters. Inform the name of the athlete
// champion to keep the gold medal and if she broke
// Record, report the payment that will be 500 million. Register
// It is at 15.50 meters.
const recordtop = 15.50;
const num = parseInt(prompt("How many athletes do you want to type?"));
const olimpics = [];

for (let i = 0; i < num; i++) {
  const olimpic = {
    Athlete: prompt(`Type the Athlete ${i + 1} Name`),
    Mark: parseFloat(prompt(`Type the marks of athlete ${i + 1} on the jump in meters`))
  };
  olimpics.push(olimpic);
};

console.table(olimpics);

const jumps = olimpics.map(item => item.Mark);
const best = Math.max(...jumps);
const record = olimpics.find(function(element) {
  if (best >= recordtop) {
    console.log(`Congrats you have broken the world record ${recordtop} mts, your mark was ${best} mts, you win the gold medal also you win 500 million.`);
  } else {
    console.log(`You have won the gold medal, your mark was ${best}`);
  }
});
