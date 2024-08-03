const list = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 0; i < list.length - 1; i++) {
  console.log(list[i][0] + list[i][1])
}