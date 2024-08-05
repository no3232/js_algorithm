const [n, ...list] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));


list.forEach(([cnt, str]) => {
  const strlist = str.split('')
  let result = ''
  strlist.forEach(el => {
    result += el.repeat(cnt)
  })
  console.log(result)
})