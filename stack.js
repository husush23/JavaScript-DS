class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} aaded to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }
  isEmpty() {
    console.log(this.count == 0 ? 'stack is empty' : 'Stack is not empty');
    return this.count === 0;
  }

  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }
  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }
  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack cleared');
    return this.items;
  }
}

const stack = new Stack();
stack.isEmpty();
stack.push(100);
stack.push(200);
stack.peek();
stack.push(300);
stack.print();
stack.size();
stack.pop();
stack.pop();
stack.clear();
stack.isEmpty();
stack.print();
