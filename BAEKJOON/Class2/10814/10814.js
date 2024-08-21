const [N, ...arr] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n').map(el => el.split(' '))

arr.sort((a, b) => Number(a[0]) - Number(b[0]))

console.log(arr.map(el => el.join(' ')).join('\n'))