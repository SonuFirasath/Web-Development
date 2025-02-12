let n = 5;

for(let i=0;i<n;i++){
    console.log(i);
}


let obj = {
    name:"Firasath",
    role : "Developer",
    company : "Google"
}

for (const i in obj) {
    const element = obj[i];
    console.log(i , element);
}

let str = "Firasath";

for (const c of str) {
    console.log(c);
}
let i = 8
while(i>0){
    console.log(i);
    i--;
}

let j = 0;

do{
    console.log(j);
    j++;
} while(j<10)