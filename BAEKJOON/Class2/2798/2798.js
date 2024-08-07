const [[N, M], list] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let maxV = 0;

for (let i = 0; i < list.length - 2; i++) {
  for (let j = i + 1; j < list.length - 1; j++) {
    for (let k = j + 1; k < list.length; k++) {
      const v = list[i] + list[j] + list[k];

      if (v <= M) {
        maxV = Math.max(list[i] + list[j] + list[k], maxV);
      }
    }
  }
}

console.log(maxV);
