const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let test = +n;

console.log(
  test > 89 ? "A" : test > 79 ? "B" : test > 69 ? "C" : test > 59 ? "D" : "F"
);
