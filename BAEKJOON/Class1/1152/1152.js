const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

let cnt = 0;

input.forEach((str) => {
  if (str !== "") {
    cnt += 1;
  }
});

console.log(cnt);
