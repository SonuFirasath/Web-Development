"use server"
import fs from "fs/promises"

export const submitaction = async (e)=>{
    let a = await fs.writeFile("Mikey.txt",`Name is ${e.get("name")} and Address is ${e.get("add")}`)
  }