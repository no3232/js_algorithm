const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = 0;

let N = +input;

while (N >= 3) {
  if (!(N % 5)) {
    result += N / 5;
    N = 0;
    break;
  }
  N -= 3;
  result += 1;
}

if (N !== 0) {
  console.log(-1);
} else {
  console.log(result);
}
