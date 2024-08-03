const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const year = +n;

if ((!(year % 4) && (year % 100)) || !(year % 400)) {
  console.log(1)
} else {
  console.log(0)
}
