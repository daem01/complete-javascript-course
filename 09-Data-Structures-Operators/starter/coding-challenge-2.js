const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1 -- Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goal, player] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}

// 2 -- Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
for (const [key, value] of Object.entries(game.odds)) {
  sum += value;
}

let avg = sum / 3;
avg = avg.toFixed(2);
console.log(`Average odds: ${avg}`);

// 3 -- Print the 3 odds to the console, but in a nice formatted way
const { team1: team1Odds, x: drawOdds, team2: team2Odds } = game.odds;

console.log(`Odds of ${game.team1} winning: ${team1Odds}`);
console.log(`Odds of draw: ${drawOdds}`);
console.log(`Odds of ${game.team2} winning: ${team2Odds}`);

// 4 -- Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
const scorers = { ...game.scored };
console.log(scorers);
