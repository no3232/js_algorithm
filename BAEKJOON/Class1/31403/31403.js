const [a, b, c] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  Number(a) + Number(b) - Number(c)
);


console.log(
  Number(a + b) - Number(c)
);