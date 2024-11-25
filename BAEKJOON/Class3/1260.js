const [NMV, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = NMV.split(" ").map((el) => Number(el));

const points = arr.map((el) => el.split(" ").map((x) => Number(x)));

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

points.map((el) => {
  const [start, end] = el;
  graph[start][end] = 1;
  graph[end][start] = 1;
});

const bfs = (startingPoint) => {
  const queue = [startingPoint];
  const visited = new Array(N + 1).fill(false);
  const result = [];
  
  visited[startingPoint] = true;  // 시작점 방문 처리
  
  while (queue.length) {
    const current = queue.shift();
    result.push(current);
    
    // map 대신 for문 사용 (더 효율적)
    for (let i = 1; i <= N; i++) {
      if (graph[current][i] && !visited[i]) {
        visited[i] = true;  // 큐에 넣을 때 방문 처리
        queue.push(i);
      }
    }
  }
  
  return result;
};

const dfs = (startingPoint) => {
  const stack = [startingPoint];
  const visited = new Array(N + 1).fill(false);
  const result = [];
  
  while (stack.length) {
    const current = stack.pop();
    
    if (!visited[current]) {
      visited[current] = true;
      result.push(current);
      
      // 번호가 작은 순서대로 방문하기 위해 역순으로 스택에 추가
      for (let i = N; i >= 1; i--) {
        if (graph[current][i] && !visited[i]) {
          stack.push(i);
        }
      }
    }
  }
  
  return result;
};

console.log(dfs(V).join(" "));

console.log(bfs(V).join(" "));
