const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(n);

const meetings = arr
  .map((el) => el.split(" ").map((x) => Number(x)))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

let count = 0; // 선택된 회의 수
let endTime = 0; // 현재 선택된 회의의 종료 시간

for (const [start, end] of meetings) {
  // 현재 회의의 시작 시간이 이전 회의 종료 시간보다 크거나 같으면
  if (start >= endTime) {
    count++; // 회의 선택
    endTime = end; // 종료 시간 갱신
  }
}

console.log(count);
