const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req,res,next)=>
{
    console.log('Middle ware 1');
    next();
})
app.use((req,res,next)=>
{
    console.log('Middle ware 2');
    next();
})

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`This main app is listining on port ${port}`);
});
