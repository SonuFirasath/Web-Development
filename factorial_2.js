let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}
factorial(a)