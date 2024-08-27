const [K, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];

arr.forEach((el) => {
  if (el === 0 && stack.length > 0) {
    stack.pop();
  } else {
    stack.push(el);
  }
});

if (stack.length > 0) {
  console.log(stack.reduce((prev, curr) => prev + curr));
} else {
  console.log(0);
}
