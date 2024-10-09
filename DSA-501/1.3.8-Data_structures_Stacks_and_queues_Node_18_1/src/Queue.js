class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
  }

  dequeue() {
    if (this.first) {
        const del = this.first;
        this.first = del.next;
        if (del === this.last) {
            this.last = null;
        }
        return del.value;
    }
  }
}

module.exports = Queue;
