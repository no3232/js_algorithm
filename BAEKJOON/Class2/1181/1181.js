const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const resultArr = new Set(arr);

[...resultArr]
  .sort()
  .sort((a, b) => a.length - b.length)
  .forEach((el) => {
    console.log(el);
  });
