const User = require('./User')
const Card = require('./Card')
const Round = require('./Round')
const Hand = require('./Hand')
const Game = require('./Game')

const threeOfDiamonds = new Card('Diamonds', 3)
const fourOfDiamonds = new Card('Diamonds', 4)
const tenOfHearts = new Card('Hearts', 10)
const eightOfSpades = new Card('Spades', 8)
const kingOfClubs = new Card('Clubs', 13)

const alpha = new User('Alpha')
const bravo = new User('Bravo')
const charlie = new User('Charlie')
const delta = new User('Delta')

const players = [alpha, bravo, charlie, delta]

const handAlpha = new Hand([threeOfDiamonds])
const handBravo = new Hand([fourOfDiamonds, kingOfClubs])
const handCharlie = new Hand([tenOfHearts])
const handDelta = new Hand([eightOfSpades])

alpha.setHand(handAlpha)
bravo.setHand(handBravo)
charlie.setHand(handCharlie)
delta.setHand(handDelta)

const game = new Game(players)

// console.log(game.players[1].hand.cards[1])
// console.log("true if users hand is an array:", Array.isArray(game.players[0].hand.cards))
// console.log(game.players[0])

const roundOne = new Round(players, 0)
// console.log(roundOne)
roundOne.play(alpha, [alpha.hand.cards[0]])
// console.log("alpha after he plays first card:", alpha.hand.cards)
roundOne.play(bravo, [bravo.hand.cards[0]])
// console.log("bravo after he plays first card:", bravo.hand.cards)
roundOne.play(charlie, [charlie.hand.cards[0]])
// console.log("charlie after he plays first card:", charlie.hand.cards)
roundOne.passTurn(delta)
roundOne.passTurn(alpha)
roundOne.play(bravo, [bravo.hand.cards[0]])
// console.log("bravo after he plays second card:", bravo.hand.cards)
roundOne.passTurn(charlie)
roundOne.passTurn(delta)
roundOne.passTurn(alpha)

if (roundOne.hasRoundEnded()) {
  game.nextRound(roundOne.winner)
}
// Game
// roundOne.setCombo(combo) {single, double}
// roundOne.play(user, card)
// roundOne.passTurn(user) {will rotate playerTurn, maintain type of Combo, increment counter +1, if counter = 3; set winner }

// Round 1 (Round: Single)
// Alpha has the Three of Diamonds!
// Alpha starts!

// Alpha played 3 of Diamonds

// The round has been set to Singles!

// Bravo played 4 of Diamonds
// Charlie played 10 of Hearts
// Delta passed
// Alpha passed
// Bravo played King of Clubs
// Charlie passed
// Delta passed
// Alpha passed

// Bravo won this round!
