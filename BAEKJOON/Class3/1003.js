const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let first = 0;
let second = 0;

const pibo = [
  [1, 0],
  [0, 1],
];

arr.forEach((el) => {
  for (let i = pibo.length; i <= el; i++) {
    pibo.push([
      pibo[i - 1][0] + pibo[i - 2][0],
      pibo[i - 1][1] + pibo[i - 2][1],
    ]);
  }
  console.log(pibo[el].join(" "));
});
