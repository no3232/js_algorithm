const [hour, minute] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(" ").map(Number)

const newMinute = minute - 45
const newHour = newMinute >= 0 ? hour : hour - 1 < 0 ? 23 : hour - 1

console.log(newHour, newMinute < 0 ? newMinute + 60 : newMinute)