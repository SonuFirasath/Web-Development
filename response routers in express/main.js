const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Hello how are you");
  res.send("Hello World how are you!!!!!!!!!!!!");
});
app.get("/index", (req, res) => {
  console.log("Hello how are you");
  res.sendFile("templates/index.html", {root:__dirname});
});
app.get("/json", (req, res) => {
  console.log("Hello how are you");
  res.json({a:1,b:2,c:78,names:["mikey","Firasath","Hello how are you...."]});
});
app.post("/", (req, res) => {
  console.log("Hello how are you");
  res.send("Hello from the post");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
