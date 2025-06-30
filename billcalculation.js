let itemPrice = 500;
let quantity = 2;
let gstRate = 18;

let amount = itemPrice * quantity;
let gstAmount = (amount * gstRate) / 100;
let totalBill = amount + gstAmount;

console.log("Amount:", amount);
console.log("GST:", gstAmount);
console.log("Total Bill:", totalBill);
