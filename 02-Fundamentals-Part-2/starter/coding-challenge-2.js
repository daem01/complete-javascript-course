// Functions
const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return (bill * 15) / 100;
    } else {
        return (bill * 20) / 100;
    }

    // I forgot about this:
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

let tip;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);