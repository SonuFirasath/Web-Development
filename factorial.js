let a = prompt("Enter the number that you want to check factorial for : ");
let fact = 1;

for(let i = a;i>=1;i--){
    fact *= i
}

console.log(`The Factorial of The Given Number ${a} is : ${fact}`)