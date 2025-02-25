const { error } = require("console");
const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("Mikey.txt", "Mikey is a very handsome and good looking boy.......")
fs.writeFile("Mikey2.txt","Mikey is a most popular and healthest guy in the world..........",()=>{
    console.log("Done Dude");
    fs.readFile("Mikey2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("Mikey2.txt","He is the most handsome as well.....", ()=>{
    fs.readFile("Mikey2.txt",(e,d)=>
    {
        console.log(d.toString())
    })
})
console.log("Ending")