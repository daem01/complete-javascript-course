// Functions
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win! (${avgDolphins} - ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win! (${avgKoalas} - ${avgDolphins})`;
    } else {
        return `No team wins...`;
    }
};

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// Logs
console.log(`The Dolphins average score was ${scoreDolphins}`);
console.log(`The Koalas average score was ${scoreKoalas}`);

console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

// Logs
console.log(`The Dolphins average score was ${scoreDolphins}`);
console.log(`The Koalas average score was ${scoreKoalas}`);

console.log(checkWinner(scoreDolphins, scoreKoalas));