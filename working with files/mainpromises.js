import fs from "fs/promises"

let a =  await fs.readFile("Miikey2.txt")

let b = await fs.writeFile("Mikey2.txt", "\n \n \nThis is amazing .......")
console.log(a.toString(),b)