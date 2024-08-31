const [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(pValue) {
    const current = new Node(pValue);
    let postTail;

    if (!this.head) {
      this.head = current;
    }

    if (!this.tail) {
      this.tail = current;
    } else {
      postTail = this.tail;
      postTail.next = current;
      current.prev = this.tail;
      this.tail = current;
    }

    this.length++;
  }

  pop() {
    let postHead;

    if (this.head) {
      postHead = this.head;
      console.log(postHead.value);
      this.head = postHead.next;
      this.length--;
    } else {
      console.log(-1);
    }
  }

  size() {
    console.log(this.length);
  }

  empty() {
    console.log(this.length === 0 ? 1 : 0);
  }

  front() {
    if (this.head) {
      console.log(this.head.value);
    } else {
      console.log(-1);
    }
  }

  back() {
    if (this.head) {
      console.log(this.tail.value);
    } else {
      console.log(-1);
    }
  }
}

const queue = new Queue();

arr.forEach((el) => {
  const command = el[0];
  switch (command) {
    case "push":
      queue.push(el[1]);
      break;
    case "pop":
      queue.pop();
      break;
    case "size":
      queue.size();
      break;
    case "empty":
      queue.empty();
      break;
    case "front":
      queue.front();
      break;
    case "back":
      queue.back();
      break;
  }
});
