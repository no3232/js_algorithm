const [NM, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((x) => Number(x)));

const [N, M] = NM;

let maxV = Math.max(...arr);
let minV = 0;

while (maxV > minV) {
  const midV = Math.ceil((maxV + minV) / 2);

  let sumWood = 0

  arr.forEach(x => {
    if (x - midV > 0) {
      sumWood += x - midV
    }
  })

  if (sumWood >= M) {
    minV = midV;
  } else {
    // -1 이부분을 빼먹어서 동작을 제대로 안하고 무한루프에 빠짐
    // 이분 탐색은 매 반복마다 검색 범위가 줄어 들어야함
    // midV값이 조건을 만족하지 않으면 그 값은 정답이 될수 없기 때문에 배제해야함
    // midV가 조건을 만족하지 않으면 그보다 큰 값도 모두 만족하지 않는다...
    // 따라서 -1 을 맥스값으로 잡으면 자동으로 배제가 된다.
    maxV = midV - 1;
  }
}

console.log(maxV);
