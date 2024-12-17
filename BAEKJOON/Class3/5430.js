const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < n; i++) {
  const command = arr[3 * i];
  const arrayStr = arr[3 * i + 2].slice(1, arr[3 * i + 2].length - 1);
  const target = arrayStr.length ? arrayStr.split(",") : [];
  
  // 포인터 개념으로 하는게 더 빠르다.
  let start = 0;
  let end = target.length;
  let reversed = false;
  let isError = false;

  for (let j = 0; j < command.length; j++) {
    if (command[j] === "R") {
      reversed = !reversed;
    } else if (command[j] === "D") {
      if (start >= end) {
        isError = true;
        break;
      }
      if (reversed) {
        end--;
      } else {
        start++;
      }
    }
  }

  if (isError) {
    console.log("error");
    continue;
  }

  const result = target.slice(start, end);
  if (reversed) result.reverse();
  console.log(`[${result.join(",")}]`);
}