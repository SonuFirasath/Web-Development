// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(4545);
//     }, 3500);
//   });
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return 344
    
}


async function main() {
  console.log("Loading Modules");

  console.log("DO something else");

  console.log("Load data");
  let data = await getData();

  console.log(data);

  console.log("Process data");

  console.log("Task 2 is gonna run");
}

main();

// data.then(()=>{

//     console.log(data);

//     console.log("Process data");

// })
