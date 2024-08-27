const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// const arr = Array(N).fill().map((_, i) => {
//   return i+1
// })

// while (arr.length !== 1) {
//   arr.shift()
//   arr.push(arr.shift())
// }

// console.log(arr[0])

const N = +input;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.length++;
  }

  addLast(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;

    this.length++;

    return node;
  }

  addMiddle(value, index) {
    if (index > 0 && index > this.length) {
      return;
    }

    if (index === 0) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;

      this.length++;

      return;
    }

    const node = new Node(value);
    let current, prev;
    let count = 0;

    while (count < index) {
      prev = current;
      count++;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    this.length++;
  }

  removeFirst() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getLength() {
    return this.length;
  }

  getHead() {
    return this.head.value;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
  cards.addLast(i);
}

while (cards.getLength() !== 1) {
  cards.removeFirst();
  cards.addLast(cards.getHead());
  cards.removeFirst();
}

console.log(cards.getHead());
