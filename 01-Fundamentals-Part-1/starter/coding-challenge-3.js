const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(`Dolphins Average Score: ${scoreDolphins.toFixed(2)}
Koala's Average Score: ${scoreKoalas.toFixed(2)}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins Win! With an average score of ${scoreDolphins.toFixed(2)}.`);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas Win! With an average score of ${scoreKoalas.toFixed(2)}.`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Competition ended in a draw!`)
} else {
    console.log(`There are no winners... 😢`);
}
