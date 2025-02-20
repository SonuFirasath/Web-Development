const addItem = async (item) => {
  await randomdelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomdelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};
async function main() {
  setInterval(() => {
    let last = document.body.getElementsByTagName("div");

    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 200);

  let text = [
    "Initilalized Hacking now reading your data",
    "Reading your Files",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const item of text) {
    await addItem(item);
  }
  await randomdelay();
  clearInterval(t);
}

main();
