const N = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim()

const number = BigInt(N)

const factorial = (number) => {
  return number ? BigInt(BigInt(number) * BigInt(factorial(number - 1n))) : 1;
}

const numArr = [...factorial(number).toString()]

let result = numArr.length - 1

for (result; result > -1; result--) {
  if (numArr[result] !== '0') {
    break
  }
}

console.log(numArr.length - result -1)