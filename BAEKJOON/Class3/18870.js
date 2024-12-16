const [N, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(N);

const points = arr.split(" ").map((el) => Number(el));


const pointsSet = new Set(points)

const sortedPoints = [...pointsSet].sort((a, b) => a - b)

const obj = {}

sortedPoints.forEach((x, i) => {
  obj[x] = i
})

const result = []

points.forEach(x => {
  result.push(obj[x])
})

console.log(result.join(' '))