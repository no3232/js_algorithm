const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((x) => Number(x)));

const n = N[0];

const move = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const dfs = (first, mapArr, M, N) => {
  const stack = [first];
  
  while (stack.length > 0) {
    const [y, x] = stack.pop();
    mapArr[y][x]= 0;

    move.forEach((el) => {
      const newY = y + el[0];
      const newX = x + el[1];
      if (newY >= 0 && newY < M && newX >= 0 && newX < N) {
        if (mapArr[newY][newX] === 1) {
          mapArr[newY][newX] = 0;
          stack.push([newY, newX]);
        }
      }
    });
  }
};

const baechu = (MNK, x) => {
  const [M, N, K] = MNK;
  const mapArr = Array.from(Array(M), () => Array(N).fill(0));

  let answer = 0;

  x.forEach((el) => {
    mapArr[el[0]][el[1]] = 1;
  });

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (mapArr[i][j] === 1) {
        answer += 1;
        dfs([i, j], mapArr, M, N);
      }
    }
  }

  console.log(answer);
};

for (let i = 0; i < arr.length; i++) {
  const [M, N, K] = arr[i];
  const x = arr.slice(i + 1, i + 1 + K);

  baechu([M, N, K], x);
  i += K;
}
