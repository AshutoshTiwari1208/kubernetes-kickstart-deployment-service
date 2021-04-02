const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey this is working, this is version 2 !!");
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(3000, (req, res) => {
  console.log("running on port  : 3000");
});
