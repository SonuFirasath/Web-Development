// import fs from "fs/promises";
// import fsn from "fs";
// import path from "path";

// const basepath =
//   "C:\\Users\\F.G.FIRASATH\\OneDrive\\Desktop\\Web Development Course\\Clutter remover in node.js>";
// async function removeClutter() {

//   let files = await fs.readdir(basepath);

//   for (const items of files) {
//     let ext = items.split(".")[items.split(".").length - 1];
//     console.log(ext);
//     if (ext != "js" && ext != "json" && items.split(".").length > 1) {


//       if (fsn.existsSync(path.join(basepath, ext))) {
//         // move the file t o this directory
//         fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
//       } else {
//         fs.mkdir(ext);
//         fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
//       }
//     }
//     //   console.log(items);
//   }
// }
// removeClutter();

import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

const basepath = "C:\\Users\\F.G.FIRASATH\\OneDrive\\Desktop\\Web Development Course\\Clutter remover in node.js";

async function removeClutter() {
  try {
    let files = await fs.readdir(basepath);

    for (const items of files) {
      let ext = items.split('.').pop();
      console.log(ext);

      if (ext !== 'js' && ext !== 'json' && items.split('.').length > 1) {
        const targetDir = path.join(basepath, ext);

        if (fsn.existsSync(targetDir)) {
          // Move the file to this directory
          await fs.rename(path.join(basepath, items), path.join(targetDir, items));
        } else {
          await fs.mkdir(targetDir);
          await fs.rename(path.join(basepath, items), path.join(targetDir, items));
        }
      }
    }
  } catch (error) {
    console.error('Error processing files:', error);
  }
}

removeClutter();
