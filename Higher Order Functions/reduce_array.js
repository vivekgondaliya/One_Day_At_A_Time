var orders = [
    { amount: 250 },
    { amount: 325 },
    { amount: 400 },
    { amount: 100 }
];

//old school
var totalAmount = 0;
for(var i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount;
}

//higher-order funciton: reduce with arrow function syntax
var totalOrder = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);
console.log(totalOrder);