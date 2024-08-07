const list = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

list.forEach(([a, b, c]) => {
  if ((a === 0) & (b === 0) & (c === 0)) {
    return;
  }
  const newV = [a, b, c].sort((a, b) => a - b);
  console.log(newV[2]**2 === newV[0]** 2 + newV[1]**2 ? 'right' : 'wrong')
});
