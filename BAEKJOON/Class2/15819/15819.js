const [L, str] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const strArray = str.split("").map((el) => el.charCodeAt() - 96);

console.log(
  strArray.reduce((prev, curr, i) => prev + ((curr * 31 ** i) % 1234567891)) %
    1234567891
);
