const [KN, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = KN.split(" ").map(Number);

const lanArr = arr.map(Number);

/**
 * 이거 이분탐색 문제
 * 랜선 N개 만들어야함
 * K개의 랜선은 제각각
 * 손실되는 랜선을 최소화해서
 * 만들수 있는 랜선의 길이를 제시하자
 * 1. 랜선에서 최소값으로 잘라야하나?
 * 2. 최소값으로 자른거에서 절반값으로 나눠보기
 * 3. 나눴을 때 N개 보다 크면 올려
 * 4. 나눴을 때 N개 보다 작으면 내려
 * 5. N개 컷되면 종료
 */

let minV = 1;
let maxV = Math.max(...arr);
let result = 0;

while (minV <= maxV) {
  let middleV = Math.ceil((maxV + minV) / 2);
  let counter = 0;
  lanArr.map((el) => {
    counter += Math.floor(el / middleV);
  });

  if (counter < N) {
    maxV = middleV - 1;
  } else {
    minV = middleV + 1;
  }
}

console.log(maxV);
