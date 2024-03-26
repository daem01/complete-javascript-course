const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let bill = 0; bill < bills.length; bill++) {
    tips.push(calcTip(bills[bill]));
    totals.push((bills[bill] + tips[bill]));
}

console.log(`Bills + Tips: ${totals}`);
console.log(`Average: $${calcAverage(totals)}`);