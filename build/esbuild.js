const { dtsPlugin } = require("esbuild-plugin-d.ts");
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line consistent-return
function readAll(parentPath, out) {
  try{
    const files = fs.readdirSync(parentPath);
    // console.log(files, 1)
    files.forEach((item)=> {
      const tempPath = path.join(parentPath,item);
      const stats = fs.lstatSync(tempPath);
      if(stats.isDirectory()){
        readAll(tempPath,out);
      }else if(tempPath.split('.')[1] === 'ts') out.push(tempPath);
    });
  }catch(e){
    console.warn(`Path Error:${  parentPath}`);
    return out;
  }
}

const files = []
readAll('./src', files)
console.log(files)
const obj = {
}
files.forEach((e) => {
  const temp = e.substring(4)
  // console.log(temp, '11111')
  obj[temp.split('.')[0]] = e
})

// console.log(obj)
console.time("a");
require('esbuild').build({
  entryPoints: obj,
  outdir: 'lib',
  bundle: false,
  plugins: [dtsPlugin()]
}).catch(() => process.exit(1))

console.timeEnd("a");
