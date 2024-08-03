const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [A, B] = input[0];
const list = input[1]

const result = []

list.forEach(el => {
  if (el < B) {
    result.push(el)
  }
})

console.log(result.join(' '))