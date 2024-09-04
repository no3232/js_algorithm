const [M, N] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const NumberArr = Array(N+1).fill(true);

NumberArr[0] = false
NumberArr[1] = false

for (let i = 2; i <= Math.sqrt(N); i++) {
  for (let j = i ** 2; j <= N; j++) {
    if (!NumberArr[j]) {
      continue;
    }
    if (j % i === 0) {
      NumberArr[j] = false;
    }
  }
}


const result = []

for (let k = M; k < N + 1; k++) {
  if (NumberArr[k]) {
    result.push(k)
  }
}

console.log(result.join('\n'))