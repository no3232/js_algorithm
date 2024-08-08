const [a, b] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let m = 0;
let n = 0;

for (let i = Math.min(a, b); i > 0; i--) {
  if (a % i === 0 && b % i === 0) {
    m = i;
    break;
  }
}

for (let j = Math.max(a, b); j < 100000000; j++) {
  if (j % a === 0 && j % b === 0) {
    n = j;
    break;
  }
}

console.log(m);
console.log(n);
