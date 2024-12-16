const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const paper = arr.map((row) => row.split(" ").map(Number));
let white = 0;
let blue = 0;

function divide(x, y, n) {
  // 현재 영역의 색상 확인
  let count = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (paper[i][j]) count++;
    }
  }

  // 합을 만들면 간단하게 알 수 있었기 때문에 굳이 첫번째요소가 뭐였는지 지정할 필요가 없었다.

  // 모두 흰색(0)인 경우
  if (count === 0) {
    white++;
  }
  // 모두 파란색(1)인 경우
  else if (count === n * n) {
    blue++;
  }
  // 섞여있는 경우 4등분
  else {
    n = n / 2;

    // 애초에 정사각형이기 때문에 xy 좌표를 전부 뽑을 필요 자체가 없었다.
    // 시작점이랑 끝점까지 더해주는 수만 알고 있으면 되는거였음
    // 재귀로 풀어도 충분히 가능했음
    // 굳이 스택을 넣을필요가 없었다. 메모리를 좀 더 효율적으로 사용 가능

    divide(x, y, n); // 왼쪽 위
    divide(x, y + n, n); // 오른쪽 위
    divide(x + n, y, n); // 왼쪽 아래
    divide(x + n, y + n, n); // 오른쪽 아래
  }
}

divide(0, 0, Number(N));
console.log(white);
console.log(blue);
