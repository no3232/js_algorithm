const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const obj = {
  ")": "(",
  "]": "[",
};

for (let i = 0; i < arr.length - 1; i++) {
  const target = arr[i];
  const stack = [];
  let result = "yes";
  target.split("").forEach((element) => {
    if (element === "(" || element === "[") {
      stack.push(element);
    }
    if (element === ")" || element === "]") {
      if (obj[element] !== stack.pop()) {
        result = "no";
      }
    }
  });
  if (stack.length !== 0) {
    result = "no";
  }
  console.log(result);
}
