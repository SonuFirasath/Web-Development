const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let sitename = "Adidas";
  let searchtext = "search now";
  res.render("index", { sitename:sitename , searchtext:searchtext});
});
app.get("/blog/:slug", (req, res) => {
  let sitename = "Adidas is a good";
  let searchcontent = "It is a very popular and good brand";
  res.sendFile("templates/blogpost.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
