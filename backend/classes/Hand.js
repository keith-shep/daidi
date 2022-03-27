class Hand {
  constructor (cards) {
    this.cards = cards
  }

  pop (cardsToBePlayed) {
    // TODO remove card from this
    // console.log(Array.isArray(this.cards))
    const result = this.cards.filter(card => !cardsToBePlayed.includes(card))
    this.cards = result
  }
}

module.exports = Hand
