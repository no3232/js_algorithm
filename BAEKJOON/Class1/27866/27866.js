const [S, i] = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim().split('\n')

console.log(S.split('')[i-1])