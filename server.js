require('dotenv').config();
const express = require("express");
const app = express();
const mongobb = require("./data/database");
const PORT = process.env.PORT || 3000;

app.use("/", require("./routes"));

mongobb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Database is listening and Node is running on port ${PORT}`);
    });
  }
});
