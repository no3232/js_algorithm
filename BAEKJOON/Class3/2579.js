const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const memo = Array(arr.length).fill(0)

const moving = (idx) => {
  if (idx === 0) {
    memo[idx] = arr[idx]
    return
  }
  if (idx === 1) {
    memo[idx] = arr[idx] + arr[idx - 1]
    return
  }
  if (idx === 2) {
    memo[idx] = Math.max(arr[idx] + arr[idx - 1], arr[idx] + arr[idx - 2])
    return
  }

  const first = arr[idx] + arr[idx-1] + memo[idx - 3]
  const second = arr[idx] + memo[idx - 2]

  if (first > second) {
    memo[idx] = first
  } else {
    memo[idx] = second
  }
}

for (let i = 0; i < arr.length; i++) {
  moving(i)
}

console.log(memo[memo.length-1])