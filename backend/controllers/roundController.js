const Round = require("../models/Round");

const roundOne = new Round({ typeCombo: "Single" })
const returnValue = {round: roundOne}

exports.list = function(req, res) {
  res.send(returnValue);
}
