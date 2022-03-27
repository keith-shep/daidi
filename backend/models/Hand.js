const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HandSchema = new Schema({
  cardHand: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
  }],
  player: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
})

// This creates our model from the above schema, using mongoose's model method
const Hand = mongoose.model('Hand', HandSchema)

// Export the Article model
module.exports = Hand
