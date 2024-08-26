const [N, A, M, B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const AMap = A.reduce((acc, curr) => {
  acc.set(curr, 1)
  return acc
}, new Map())

const result = [];

B.forEach((el) => {
  if (AMap.get(el)) {
    result.push(1);
  } else {
    result.push(0);
  }
});

console.log(result.join("\n"));
