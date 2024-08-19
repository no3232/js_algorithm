const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let upper = 1;
let down = 1;

for (let i = 1; i <= N; i++) {
  upper *= i;
}

for (let j = 1; j <= K; j++) {
  down *= j;
}

for (let k = 1; k <= N - K; k++) {
  down *= k;
}

console.log(upper / down);
