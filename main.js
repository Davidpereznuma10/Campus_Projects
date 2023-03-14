// Program that requests the entry of the name and price of an item and the
// quantity carried by the customer. Show what the buyer must pay
// on your bill.
const inputArticle = prompt("Type the article");
const inputCost = parseFloat(prompt("Type the price"));
const inputAmount = parseFloat(prompt("Type the amount"));

const totalCost = inputCost * inputAmount;
console.log(`The price of ${inputArticle} is $${inputCost}.\nFor that reason your total cost is $${totalCost}`);
