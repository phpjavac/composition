const { exec } = require('child_process')
const fs = require('fs')

const files = []
fs.readdirSync('.husky').forEach((file) => {
  if (fs.lstatSync(`.husky/${file}`).isFile()) {
    files.push(file)
  }
})
try {
  if (fs.existsSync('/bin/chmod')) {
    // 当前为 unix 系统
    files.forEach((f) => {
      exec(`chmod 755 .husky/${f}`, (err) => {
        if (!err) {
          console.log(`set ${f} hook permission success.`)
        } else {
          console.log(err)
          console.log(`set ${f} hook permission failed.`)
        }
      })
    })
  }
} catch (e) {
  console.log(e)
}
