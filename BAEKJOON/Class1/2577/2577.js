const [A, B, C] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt').toString().trim().split("\n").map(Number)

const numberList = (A * B * C).toString().split('')

const numberCnt = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0
}

numberList.forEach(el => {
  numberCnt[Number(el)] += 1
})

for(let i = 0; i < 10; i++) {
  console.log(numberCnt[i])
}