const list = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const jsSet = new Set();

list.forEach((el) => {
  jsSet.add(el % 42);
});

console.log([...jsSet].length);
