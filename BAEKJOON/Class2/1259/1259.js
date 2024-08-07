const list = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

list.slice(0, list.length-1).forEach((str) => {
  let result = "yes";
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      result = "no";
      break;
    }
  }

  console.log(result);
});
