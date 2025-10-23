class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }
}

const myStack = new Stack();
myStack.push('a');
myStack.push('g');
myStack.push('d');
myStack;

myStack.pop();
myStack;
