const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const result = input[1].split('').reduce((prev, curr) => {
  return Number(prev) + Number(curr)
}, 0)

console.log(result);
