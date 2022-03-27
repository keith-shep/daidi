const Round = require('./Round')

class Game {
  constructor (players) {
    this.players = players
    this.rounds = []
  }

  nextRound (prevWinner) {
    console.log('hello from nextRound')
    const indexStartWinner = this.players.findIndex(user => user === prevWinner)
    const nextRound = new Round(this.players, indexStartWinner)
    this.rounds.push(nextRound)
  }
}

module.exports = Game
