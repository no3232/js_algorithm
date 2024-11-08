const [NM, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = NM.split(" ");

const N = Number(n);
const M = Number(m);

const result = new Map()
const reverseResult = new Map();;

for (let i = 0; i < N; i++) {
  result.set(arr[i], i)
  reverseResult.set(i, arr[i])
}

for (let j = N; j < N + M; j++) {
  if (isNaN(arr[j])) {
    console.log(result.get(arr[j])+1);
  } else {
    console.log(reverseResult.get(Number(arr[j])-1));
  }
}
