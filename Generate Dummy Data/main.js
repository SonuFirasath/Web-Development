const express = require("express");
const mongoose = require('mongoose');
const Employee = require("./models/employes")
const app = express();
mongoose.connect('mongodb://localhost:27017/Company')
const port = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { foo: "Foo" });
});

const getrand = (arr)=>{
    let rno = Math.floor((Math.random() * (arr.length - 1)))
    return arr[rno];
}
app.get("/generate", async (req, res) => {

   await Employee.deleteMany({})

    let randnames = ["Mikey","Surya","Sonu","naveen"]
    let randlang = ["Java","Python","java script","SQL"]
    let randcity = ["Bangalore","Hydrabad","Delhi", "kolkata"]
    for(let i = 0;i<10;i++){
        let e = await Employee.create({
            name: getrand(randnames),
            salary:Math.floor(Math.random() * 500000),
            language:getrand(randlang),
            city:getrand(randcity),
            isManager:(Math.random())>0.5?true:false
        })
        console.log(e)
    }
  res.render("index", { foo: "Foo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
