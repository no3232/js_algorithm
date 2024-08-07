const [[n], list] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let result = n
list.forEach(el => {
  if (el < 2) {
    result--
  }
  for (let i = 2; i < el; i++) {
    if (el % i === 0) {
      result--
      break
    }
  }
})

console.log(result)