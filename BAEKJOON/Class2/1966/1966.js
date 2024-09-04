const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

class Node {
  constructor(value, target) {
    this.value = value;
    this.next = null;
    this.target = target;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value, target) {
    const node = new Node(value, target);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const beforeTail = this.tail;
      beforeTail.next = node;
      this.tail = node;
    }
  }

  popHead() {
    const currHead = this.head;
    this.head = currHead.next;
    return [currHead.value, currHead.target];
  }
}

for (let i = 0; i < arr.length; i += 2) {
  const currentArr = arr[i + 1];
  const fifo = arr[i + 1].slice().sort((a, b) => b - a);
  let fifoidx = 0
  let target = arr[i][1];


  const queue = new Queue();

  for (let j = 0; j < currentArr.length; j++) {
    if (j === target) {
      queue.push(currentArr[j], true);
    } else {
      queue.push(currentArr[j], false);
    }
  }

  while (true) {
    const [value, target] = queue.popHead()
    if (value === fifo[fifoidx]) {
      if (target) {
        console.log(fifoidx + 1);
        break
      }
      fifoidx += 1
    } else {
      queue.push(value, target)
    }
  }
}
