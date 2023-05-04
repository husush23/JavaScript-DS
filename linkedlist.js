class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  addLast(data) {
    const node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  addAt(data, index) {
    // Out of range
    if (index > this.size) {
      return;
    }
    // At first
    if (index === 0) {
      this.addFirst(data);
      return;
    } else {
      const node = new Node(data);
      let current, prev;

      current = this.head;
      let count = 0;
      while (count < index) {
        prev = current;
        count++;
        current = current.next;
      }
      node.next = current;
      prev.next = node;

      this.size++;
    }
  }
  getAt(index) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
  }
  removeAt(index) {
    if (index > this.size) return;
    let current = this.head;
    let prev;
    let count = 0;
    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }
  removeFirst() {
    let current = this.head;
    this.head = current.next;
  }
  removeLast() {
    let current;
    let count = 0;
    if (!this.head) return;
    else {
      current = this.head;
      while (current.next) {
        count++;
        current = current.next;
        if (current.size == count) {
          current = null;
        }
      }
    }
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
  printValue() {
    let value = [];
    let current = this.head;
    while (current) {
      value.push(current.data);
      // console.log(current.data);
      current = current.next;
    }
    console.log(value);
  }
}

const list = new Linkedlist();
list.addFirst(200);
list.addFirst(5);
list.addLast(9);
list.addAt(100, 0);
list.addAt(100, 2);
list.addAt(300, 4);
// list.getAt(1);
// list.removeAt(2);
// list.clear();
list.removeFirst();
list.removeLast();
list.printValue();
