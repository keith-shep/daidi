const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoundSchema = new Schema({
  won: {
    type: Boolean,
    required: true,
    default: false
  },
  playerTurn: {
    type: Number,
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  typeCombo: {
    type: String,
    required: true,
    enum: ['Single', 'Pair', 'Five-Card']
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  currentPlay: {
    type: Schema.Types.ObjectId,
    ref: 'Card',
    default: null
  }
})

// This creates our model from the above schema, using mongoose's model method
const Round = mongoose.model('Round', RoundSchema)

// Export the Article model
module.exports = Round
