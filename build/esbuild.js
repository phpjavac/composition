const { dtsPlugin } = require("esbuild-plugin-d.ts");
const fs = require('fs');
const path = require('path');

function readAll(parentPath, out) {
    try{
        let files = fs.readdirSync(parentPath);
        // console.log(files, 1)
        files.forEach(function(item){
            let tempPath = path.join(parentPath,item);
            let stats = fs.lstatSync(tempPath);
            if(stats.isDirectory()){
                readAll(tempPath,out);
            }else{
                if(tempPath.split('.')[1] === 'ts') out.push(tempPath);
            }
        });
    }catch(e){
        console.warn("Path Error:" + parentPath);
        return out;
    }
}

let files = []
readAll('./src', files)
console.log(files)
let obj = {
}
files.forEach((e) => {
    let temp = e.substring(4)
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
