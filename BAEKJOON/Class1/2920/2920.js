const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .join("");

const ascending = "12345678";
const decending = "87654321";

console.log(
  input === ascending
    ? "ascending"
    : input === decending
    ? "descending"
    : "mixed"
);
