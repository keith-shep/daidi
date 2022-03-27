const Card = require("./models/Card");
const User = require("./models/User");
const catalog = require("./routes/catalog");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
app.use(cors());

app.use('/catalog', catalog)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
