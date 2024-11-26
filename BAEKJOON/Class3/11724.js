const [NM, ...nodes] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((x) => Number(x)));

const [N, M] = NM;

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

nodes.map(el => {
  const [s, e] = el
  graph[s][e] = 1
  graph[e][s] = 1
})

const visited = Array(N + 1).fill(false);

let result = 0;

const bfs = (starting) => {
  const stack = [starting];
  visited[starting] = true;

  while (stack.length) {
    const current = stack.pop();

    for (let i = 1; i <= N; i++) {
      if (visited[i]) {
        continue;
      }
      if (graph[current][i] === 1) {
        stack.push(i);
        visited[i] = true;
      }
    }
  }
};

for (let j = 1; j <= N; j++) {
  if (visited[j]) {
    continue;
  }
  bfs(j);
  result += 1
}

console.log(result);
