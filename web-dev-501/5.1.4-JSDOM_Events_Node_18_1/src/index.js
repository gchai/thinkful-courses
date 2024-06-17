function timerGame(name) {
  console.log('Hi, ' + name);
}

setTimeout(timerGame, 1000, "Thundercat")

module.exports = timerGame;