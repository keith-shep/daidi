const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HandSchema = new Schema({
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
  }]
})

HandSchema.methods.pop = function pop (cardsToBePlayed) {
  const result = this.cards.filter(card => !cardsToBePlayed.includes(card))
  this.cards = result
};

// This creates our model from the above schema, using mongoose's model method
const Hand = mongoose.model('Hand', HandSchema)

// Export the Article model
module.exports = Hand
