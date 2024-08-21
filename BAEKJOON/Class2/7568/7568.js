const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map(Number));

const result = [];

for (let i = 0; i < arr.length; i++) {
  let currentRank = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i === j) {
      continue
    }

    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      currentRank += 1
    }

  }

  result.push(currentRank)
}

console.log(result.join(' '))