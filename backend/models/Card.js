const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  suit: {
    type: String,
    required: true,
    enum: ["Clubs", "Hearts", "Spades", "Diamonds"],
  },
  number: {
    type: Number,
    min: 1,
    max: 13,
    required: false,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Card = mongoose.model("Card", CardSchema);

// Export the Article model
module.exports = Card;
