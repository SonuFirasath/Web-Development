let a = prompt("Enter a number : ")

let b = prompt("Enter 2nd number : ")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed..")
}
let sum = parseInt(a) + parseInt(b)

try{
    console.log("The sum is ",sum*x)
    
}catch(error)
{
    console.log("Error aagaya dekh naa bhai ..")
}