const N = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const n = +N;

let count = 0;

let result = 0;

while (count < n) {
  result += 1;
  const arr = result.toString().split("");
  for (let i = 0; i < arr.length - 2; i++) {
    if (((arr[i] ==6 && arr[i + 1]) == 6 && arr[i + 2]) == 6) {
      count += 1;
      break;
    }
  }
}

console.log(result);
