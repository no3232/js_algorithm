const [n, K, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(n);

const node = arr.map((el) => el.split(" ").map((x) => Number(x)));

const computer = Array.from(Array(N), () => Array(N).fill(0));

node.forEach((el) => {
  const x = el[0] - 1;
  const y = el[1] - 1;
  computer[x][y] = 1;
  computer[y][x] = 1;
});

const result = Array(N).fill(0);

const stack = [0];

while (stack.length > 0) {
  const idx = stack.pop();
  if (result[idx] === 1) continue;
  result[idx] = 1;

  for (let i = 0; i < N; i++) {
    if (computer[idx][i] === 1) {
      stack.push(i);
    }
  }
}

console.log(result.reduce((acrr, curr) => acrr + curr) - 1);
