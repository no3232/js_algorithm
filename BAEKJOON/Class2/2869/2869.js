const [A, B, V] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);


let days = 0
days += Math.ceil((V - A) / (A - B));
days += 1

console.log(days)