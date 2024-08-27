const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const obj = {
  ")": "(",
};

for (let i = 0; i < arr.length; i++) {
  const target = arr[i];
  const stack = [];
  let result = "YES";
  target.split("").forEach((element) => {
    if (element === "(") {
      stack.push(element);
    }
    if (element === ")") {
      if (obj[element] !== stack.pop()) {
        result = "NO";
      }
    }
  });
  if (stack.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
