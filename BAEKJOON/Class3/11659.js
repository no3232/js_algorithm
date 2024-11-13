const [NM, arr, ...nlist] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n')

const newArr = arr.split(' ').map(el => Number(el))

for (let i = 1; i < newArr.length; i++) {
  newArr[i] = newArr[i] + newArr[i-1]
}

let result = ''

nlist.forEach(el => {
  const [a, b] = el.split(' ').map(x => Number(x))

  result += (newArr[b-1] - (newArr[a-2] | 0)) + '\n'
})

console.log(result)