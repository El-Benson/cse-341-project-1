require('dotenv').config();
const express = require("express");
const app = express();
const mongobb = require("./data/database");
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Ensure JSON parsing middleware is included
app.use("/", require("./routes")); // Use routes from the routes folder

mongobb.initDb((err) => {
  if (err) {
    console.log("Database connection error:", err);
  } else {
    app.listen(PORT, () => {
      console.log(`Database is listening and Node is running on port ${PORT}`);
    });
  }
});
