const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));
/**
 * 1. 숫자가 하나 주어진다
 * 2. 그 숫자가 있을때까지 수열에 밀어넣는다
 * 3. 이 때 밀어넣는 숫자는 하나씩 늘어난다.
 * 4. 이 숫자는 더하기만 한다.
 * 5. 이 때 스택 끝에 원하는 숫자가 있다면
 * 6. pop해준다
 */

const stack = [1];
let idx = 2;
let result = ["+"];

arr.map((el) => {
  if (result[0] === "NO") {
    return;
  }
  if (stack.length === 0) {
    stack.push(idx);
    result.push('+')
    idx++;
  }
  while (stack.length !== 0) {
    if (stack[stack.length - 1] < el) {
      stack.push(idx);
      idx++;
      result.push("+");
    } else {
      const popNum = stack.pop();
      if (popNum !== el) {
        result = ["NO"];
        break;
      }
      result.push("-");
      break;
    }
  }
});

console.log(result.join("\n"));
