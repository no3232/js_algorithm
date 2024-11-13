const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const triangle = Array(101).fill(0);
triangle[1] = 1;
triangle[2] = 1;
triangle[3] = 1;
triangle[4] = 2;
triangle[5] = 2;

for (let i = 6; i < 101; i++) {
  triangle[i] = triangle[i - 1] + triangle[i - 5];
}

arr.forEach((el) => {
  console.log(triangle[el]);
});
