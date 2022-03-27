class User {
  constructor (name, hand) {
    this.name = name
    this.hand = hand
  }

  setHand (cards) {
    this.hand = cards
  }

  getHand () {
    return this.hand
  }
}

module.exports = User
