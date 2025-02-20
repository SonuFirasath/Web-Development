async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

function sum(a ,b ,c ){
    return a+b+c;
}

(async function main() {
  // let a = await sleep()
  // console.log(a)
  // let b = await sleep()
  // console.log(b)

//   let [x, y, ...rest] = [4, 2, 45, 32, 45, 7, 8, 9];
//   console.log(x, y, rest);


//   let [s, t, restt] = [4, 2, 45, 32, 45, 7, 8, 9];
//   console.log(s, t, restt);

    // let obj = {
    //     a : 1,
    //     b : 5,
    //     c : 43
    // }
    // console.log(typeof obj.a ,typeof obj.b)

    // let {a,b} = obj;

    // console.log(a,b)
    // console.log(typeof a ,typeof b)

    let arr = [4,3,2];
    console.log(sum(...arr))
})();
