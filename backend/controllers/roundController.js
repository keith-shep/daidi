const Card = require('../models/Card')
const Round = require('../models/Round')

const roundOne = new Round({ typeCombo: 'Single' })
const returnValue = { round: roundOne }
const fourOfSpades = new Card({ suit: 'Spades', number: 4 })

exports.list = function (req, res) {
  res.send(returnValue)
}

exports.play = function (req, res) {
  roundOne.currentPlay = fourOfSpades
  console.log(roundOne)
  res.send({ round: roundOne })
}
