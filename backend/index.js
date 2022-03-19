const Card = require("./models/Card");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const returnValue = { content: "hello world" };

app.use(cors());

const fourOfSpades = new Card({ suit: "Spades", number: 4 });

console.log(fourOfSpades);

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.json(returnValue);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
