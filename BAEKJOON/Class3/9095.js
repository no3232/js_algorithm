const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

// DP 배열 초기화
const dp = new Array(11).fill(0);
dp[1] = 1; // 1
dp[2] = 2; // 1+1, 2
dp[3] = 4; // 1+1+1, 1+2, 2+1, 3

// 4부터 10까지의 경우의 수 계산
for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

// 각 테스트 케이스에 대한 결과 출력
arr.forEach(x => {
  console.log(dp[x]);
});
