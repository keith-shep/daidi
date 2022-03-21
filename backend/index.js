const Card = require("./models/Card");
const Round = require("./models/Round");
const User = require("./models/User");
const express = require("express");

const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

const fourOfSpades = new Card({ suit: "Spades", number: 4 });
const playerOne = new User({name: "John"})
const roundOne = new Round({ playerTurn: playerOne, typeCombo: "Single"})
// fourOfSpades.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
// playerOne.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
// roundOne.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
console.log(fourOfSpades);
console.log(playerOne);
console.log(roundOne)

const returnValue = { content: "hello world", round: roundOne, playerturn: playerOne, cardPlayed: fourOfSpades };

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.json(returnValue);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
