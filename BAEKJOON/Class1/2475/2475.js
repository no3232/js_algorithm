const N = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map(Number);

const v = N.reduce((prev, cur) => {
  return prev += cur ** 2
}, 0)
console.log(v % 10)