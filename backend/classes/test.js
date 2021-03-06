
const { expect, test } = require('@jest/globals')
const User = require('./User')
const Hand = require('./Hand')
const Card = require('./Card')
const Round = require('./Round')

test('Test case 1', () => {
  const alpha = new User('Alpha')
  const bravo = new User('Bravo')
  const charlie = new User('Charlie')
  const delta = new User('Delta')

  alpha.setHand(new Hand([new Card('Diamonds', 3)]))
  bravo.setHand(new Hand([new Card('Diamonds', 4), new Card('Clubs', 13)]))
  charlie.setHand(new Hand([new Card('Hearts', 10)]))
  delta.setHand(new Hand([new Card('Spades', 8)]))

  const roundOne = new Round([alpha, bravo, charlie, delta], 0)
  roundOne.play(alpha, [alpha.hand.cards[0]])
  roundOne.play(bravo, [bravo.hand.cards[0]])
  roundOne.play(charlie, [charlie.hand.cards[0]])
  roundOne.passTurn(delta)
  roundOne.passTurn(alpha)
  roundOne.play(bravo, [bravo.hand.cards[0]])
  roundOne.passTurn(charlie)
  roundOne.passTurn(delta)
  roundOne.passTurn(alpha)
  expect(roundOne.winner).toBe(bravo)
})
