const [N, list] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => (el.split(" ").map(Number)));

console.log(Math.min(...list), Math.max(...list))