const [N, Narr, M, Marr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const NMap = Narr.reduce((acrr, curr) => {
  if (acrr.get(curr)) {
    acrr.set(curr, acrr.get(curr) + 1);
  } else {
    acrr.set(curr, 1);
  }
  return acrr;
}, new Map());

const result = [];

Marr.forEach((element) => {
  if (NMap.get(element)) {
    result.push(NMap.get(element));
  } else {
    result.push(0);
  }
});

console.log(result.join(" "));
