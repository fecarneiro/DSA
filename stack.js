class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  pop() {
    if (this.count <= 0) {
      return undefined;
    }
    this.count--;
    delete this.items[this.count];
  }
}

const stackManipulation = () => {
  let stack = new Stack();
  stack.push(555);
  stack.push(555);
  stack.push(555);
  stack.pop();
  stack.push(555);
  console.log(stack);
};

stackManipulation();
