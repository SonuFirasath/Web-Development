let random = Math.random()
let a = prompt("Enter first number : ");
let c = prompt("Enter the operation that you want to perform : ");
let b = prompt("Enter second number : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    // perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    let c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}