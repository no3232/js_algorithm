const [n, ...list] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

list.forEach((ox) => {
  let cnt = 0;
  let result = 0;
  ox.forEach((el) => {
    if (el === "O") {
      cnt += 1;
      result += cnt;
    } else {
      cnt = 0;
    }
  });
  console.log(result);
});
