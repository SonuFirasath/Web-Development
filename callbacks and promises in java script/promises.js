// console.log('This is Promises');

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done")
//             resolve("Harry")
//         }, 3000);
//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you 2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done 2")
//             resolve("Harry 2")
//         }, 1000);
//     }
// })

 
// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })


// let pr = new Promise(function(resolve,reject){
//     console.log("I am an Content in the promise")
//     resolve(56)
// })
// console.log("Hello world..")

// setTimeout(()=>{
//     console.log("Hello in 2 sec")
// },2000);

// console.log("My name is Firasath...")

// console.log(pr)


let p1 = new Promise((resolve,reject)=>
{
    console.log("Promise is pending")
    setTimeout(()=>{
        alert("I am a promise and i am fulfilled .. . . . . . . . . .");
        resolve(true)
    },5000)
})
let p2 = new Promise((resolve,reject)=>
{
    console.log("Promise is pending")
    setTimeout(()=>{
        alert("I am a promise and i am fulfilled .. . . . . . . . . .");
        reject(new Error("I am a new error................................................................."))
    },5000)
})

console.log(p1)

p1.then((e)=>
{
    console.log(e);
})

p2.catch(()=>
{
    console.log("Some error occord in p2 dude.... handle it fastly otherwise you are gonna face some issues...")
})