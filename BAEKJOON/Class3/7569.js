const [MNH, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((x) => Number(x)));

const solution = () => {
  const [M, N, H] = MNH;
  const mapArr = []

  for (let i = 0; i < H; i++) {
    mapArr.push(arr.slice(arr.length / H * i, arr.length / H * i + arr.length / H))
  }

  const dx = [1, -1, 0, 0, 0, 0];
  const dy = [0, 0, 1, -1, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];

  const heap = [];
  let heapIndex = 0;
  let result = 0;

  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (mapArr[z][y][x] === 1) {
          heap.push([z, y, x, 0]);
        }
      }
    }
  }

  while (heapIndex < heap.length) {
    const [z, y, x, days] = heap[heapIndex];
    result = Math.max(days, result);
    
    for (let i = 0; i < 6; i++) {
      const rz = dz[i] + z;
      const ry = dy[i] + y;
      const rx = dx[i] + x;
      
     if (rz >= 0 && rz < H && ry >= 0 && ry < N && rx >= 0 && rx < M) {  // N과 M의 순서 수정
        if (mapArr[rz][ry][rx] === 0) {  // 배열 접근 순서 수정 [z][y][x]
          heap.push([rz, ry, rx, days + 1]);
          mapArr[rz][ry][rx] = 1;  // 방문 표시를 push 직후에
        }
      }
    }
    heapIndex++;
  }

  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (mapArr[z][y][x] === 0) {
          return console.log(-1);
        }
      }
    }
  }

  return console.log(result)
};

solution();
