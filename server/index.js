const express = require("express");
const app = express();
const port = 5000;


app.get("/",(req,res) => {
  res.send("Hello there welcome update-blog site!")
})


app.listen(port,(req,res) => {
  console.log(`update blog listening on port ${port}`)
})