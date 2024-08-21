const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(
  arr
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1])
    .map((el) => el.join(" "))
    .join("\n")
);
