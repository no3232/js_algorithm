const [n] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map(Number);


for (let i = 0; i < n; i++) {
  console.log('*'.repeat(i+1))
}