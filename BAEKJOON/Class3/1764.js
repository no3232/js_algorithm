const [NM, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map((el) => Number(el));

const see = new Set(arr.slice(0, N));
const listen = new Set(arr.slice(N, M + N).filter((x) => see.has(x)));

const result = [...listen].sort()

console.log(result.length)

console.log(result.join('\n'))