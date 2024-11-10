const N = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const n = Number(N);


const arr = [0, 0, 1, 1]

for (let i = arr.length; i <= n; i++) {
  const test = []
  if (i % 3 === 0) {
    test.push(arr[i / 3] + 1)
  }
  if (i % 2 === 0) {
    test.push(arr[i / 2] + 1)
  }
  test.push(arr[i-1] + 1)
  arr.push(Math.min(...test))
}

console.log(arr[n]);
