const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('User', UserSchema)

// Export the Article model
module.exports = User
