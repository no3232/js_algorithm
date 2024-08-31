const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const stack = [];

arr.forEach((el) => {
  if (el[0] === "push") {
    stack.push(el[1]);
  }
  if (el[0] === "pop") {
    const popNum = stack.pop();
    console.log(popNum ? popNum : -1)
  }
  if (el[0] === "size") {
    console.log(stack.length);
  }
  if (el[0] === "empty") {
    console.log(stack.length > 0 ? 0 : 1);
  }
  if (el[0] === "top") {
    console.log(stack[stack.length - 1] ? stack[stack.length - 1] : -1);
  }
});
