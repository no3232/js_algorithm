const [NM, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((x) => Number(x)));
  
const solution = () => {
  const [M, ] = NM;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  
  const queue = [];
  let queueIndex = 0;  // 큐의 시작 인덱스를 추적
  
  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (arr[y][x] === 1) {
        queue.push([y, x, 0]);
      }
    }
  }
  
  let days = 0;
  
  // 큐를 쓸 때 shift 대신 index 를 통해서 연산하도록 하는걸로 가야됨
  // shift는 확실히 속도가 느리네
  while (queueIndex < queue.length) {
    const [y, x, day] = queue[queueIndex++];  // shift() 대신 인덱스 사용
    days = Math.max(day, days);
  
    for (let i = 0; i < 4; i++) {
      const ry = dy[i] + y;
      const rx = dx[i] + x;
      const rday = day + 1;
      if (ry >= 0 && ry < M && rx >= 0 && rx < N && arr[ry][rx] === 0) {
        queue.push([ry, rx, rday]);
        arr[ry][rx] = 1;
      }
    }
  }
  
  for(let i = 0; i < M; i++) {
    if (arr[i].includes(0)) {
      return console.log('-1')
    }
  }
  return console.log(days)
}

solution()