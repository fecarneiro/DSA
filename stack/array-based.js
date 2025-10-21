class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop(element) {
    this.items.pop(element);
  }
  peak() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
const stack = new Stack();
console.log(stack.isEmpty());
stack.push('feijao');
stack.push('arroz');
stack.push('batata');
console.log(stack.peak());
console.log(stack.isEmpty());
stack.clear();
stack.push(['fel', 'fel']);

console.log(stack);
