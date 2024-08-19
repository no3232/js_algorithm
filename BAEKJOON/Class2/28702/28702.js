const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const check = (checkNum) => {
  if (!(checkNum % 5) && !(checkNum % 3)) {
    console.log('FizzBuzz')
  } else if (!(checkNum % 5)) {
    console.log('Buzz')
  } else if (!(checkNum % 3)) {
    console.log('Fizz')
  } else {
    console.log(checkNum)
  }
}

for (let i = 0; i <= 2; i++) {
  if (Number(arr[i])) {
    check(Number(arr[i]) + 3 - i)
    break
  }
}

