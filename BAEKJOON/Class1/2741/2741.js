const [n] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map(Number);


for(let i = 1; i <= n; i++) {
  console.log(i)
}