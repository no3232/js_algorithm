const [[N], people, [T, P]] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const tshirts = people.reduce((prev, curr) => {
  return prev + Math.ceil(curr / T);
}, 0);

console.log(tshirts);
console.log(Math.floor(N / P), N % P);
