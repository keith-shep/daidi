const Card = require("../models/Card");
const Hand = require("../models/Hand");

const fiveOfSpades = new Card({ suit: "Spades", number: 5 })
const sixOfSpades = new Card({ suit: "Spades", number: 6 })
const sevenOfSpades = new Card({ suit: "Spades", number: 7 })
const eightOfSpades = new Card({ suit: "Spades", number: 8 })

const handOne = new Hand({ cardHand: [fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades]})
const returnValue = {handOne}

exports.list = function(req, res) {
  res.send(returnValue);
}

exports.pop = function(req, res) {
  // handOne.cardHand = req.cardHand
  console.log('hello from pop in backend', req)
}
