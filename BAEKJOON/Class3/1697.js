const [n, m] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

const solution = (n, m) => {
  if (n >= m) return n - m;

  const dp = new Array(m + 1).fill(0)

  for (let i = 0; i < n; i++) {
    dp[i] = n - i
  }

  for (let i = n + 1; i <= m; i++) {
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
    } else {
      dp[i] = Math.min(dp[i - 1] + 1, dp[(i + 1) / 2] + 2);
    }
  }

  return dp[m];
}

console.log(solution(n, m))