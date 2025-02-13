let arr = [1,3,5,6,7,11];

// let newarr = []
// for(let i = 0;i<arr.length;i++)
// {
//     const ele = arr[i];
//     newarr.push(ele**2);
// }

let newarr = arr.map(e =>{
    return e**2
})

console.log(newarr)


const greater_than_seven = e=>{
    if(e>7){
        return true;
    }
    else{
        return false;
    }
}
// console.log(newarr.filter(greater_than_seven))

const red = (a,b) => {
    return (a+b);
}

console.log(arr.reduce(red))

let str = Array.from("Mikey")
console.log(str)