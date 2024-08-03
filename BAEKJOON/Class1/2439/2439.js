const n = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString()

const count = +n

for(let i = 1; i <= n; i++) {
  console.log(' '.repeat(count - i) + '*'.repeat(i))
}