class Round {
  constructor (players, playerTurn) {
    this.players = players // Array of players
    this.playerTurn = playerTurn // Integer
    this.typeCombo = null // Integer
    this.winner = null // Player
    this.currentPlayedCard = null // Top of the pile (card)
    this.currentPlayedUser = null // Top of the pile (user)
    this.passedCounter = 0
  }

  validateTurn (user) {
    if (user !== this.players[this.playerTurn]) {
      // console.log('Not your turn')
      return false
    }
    return true
  }

  play (user, cardsToBePlayed) {
    // cardsToBePlayed must be an array or .length will fail
    if (!this.validateTurn(user)) { return }
    if (this.currentPlayedCard === null) {
      this.setCombo(cardsToBePlayed.length)
    }
    this.currentPlayedCard = cardsToBePlayed
    this.currentPlayedUser = user
    // TODO: validation for cardsToBePlayed beating currentPlayedCards
    user.hand.pop(cardsToBePlayed)
    this.endTurn(user)
  }

  setCombo (combo) {
    // Single, Double etc
    this.typeCombo = combo
    console.log('setting combo: ' + combo)
  }

  endTurn (user) {
    if (!this.validateTurn(user)) { return }
    console.log('ending ' + user.name + ' turn')
    this.playerTurn++
    if (this.playerTurn > 3) { this.playerTurn = 0 }
    if (this.passedCounter === 3) { this.winsRound(user) }
  }

  passTurn (user) {
    this.endTurn(user)
    this.passedCounter++
  }

  winsRound (user) {
    if (this.passedCounter === 3) {
      this.winner = this.currentPlayedUser
      console.log('the winner is ' + this.winner.name)
    }
  }

  hasRoundEnded () {
    return this.winner !== null
  }
  // set user as winner
  // end round here
}

module.exports = Round

// roundOne.setCombo(combo) {single, double}
// roundOne.play(user, card)
// roundOne.pass(user) {will rotate playerTurn, maintain type of Combo, increment counter +1, if counter = 3; set winner }
// roundOne.
