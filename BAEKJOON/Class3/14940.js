const [NM, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map((x) => Number(x));

const mapArr = arr.map((el) => el.split(" ").map((x) => Number(x)));

const resultMap = Array.from(Array(N), () => Array(M).fill(0));

let startingPoint = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (mapArr[i][j] === 2) {
      startingPoint = [i, j, 0];
      break;
    }
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const stack = [startingPoint];

while (stack.length > 0) {
  const [y, x, d] = stack.pop();

  for (let i = 0; i < 4; i++) {
    const ry = dy[i] + y;
    const rx = dx[i] + x;
    const rd = d + 1;

    if (ry >= 0 && ry < N && rx >= 0 && rx < M) {
      if (startingPoint[0] === ry && startingPoint[1] === rx) continue
      if (mapArr[ry][rx] === 0) continue;
      if (resultMap[ry][rx] === 0) {
        resultMap[ry][rx] = rd;
        stack.unshift([ry, rx, rd]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (mapArr[i][j] === 1 && resultMap[i][j] === 0) {
      resultMap[i][j] = -1
    }
  }
}

resultMap.map((x) => console.log(x.join(" ")));
