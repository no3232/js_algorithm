const [a, ...customers] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const result = [];

customers.forEach(([h, w, n]) => {
  let floor = n % h;
  let room = Math.floor(n / h) + 1;
  if (floor === 0) {
    room -= 1;
    floor = h;
  }
  result.push(floor * 100 + room);
});

console.log(result.join("\n"));
