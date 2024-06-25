/*
  Write each function according to the instructions.
  
  When a function's parameters reference `games`, it references an object that looks like the one that follows.
  {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 29 }
  }
*/


/* Use an AI assistant to debug the following function */
/* Use an AI assistant to debug the following function */
function getTotalWins(games) {
  // Initialize totalWins to 0
  let totalWins = 0;

  // Loop through each game in the games object
  for (const gameName in games) {
    const game = games[gameName];
    // Increment totalWins by the number of wins in the current game
    totalWins += game.wins;
  }

  // Return the final total of wins
  return totalWins;
}

/* Use an AI assistant to help you write the following function */
const printWinLossStatus = (games) => {
  return Object.keys(games).map((game) => {
    const { wins, lost } = games[game];
    if (wins > lost) return 'has more wins';
    if (wins < lost) return 'has more losses';
    return 'has the same number of wins and losses';
  });
};

module.exports = {
  getTotalWins,
  printWinLossStatus,
};
