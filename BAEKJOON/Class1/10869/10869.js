const [A, B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(A+B)
console.log(A-B)
console.log(A*B)
console.log(Math.floor(A/B))
console.log(A%B)