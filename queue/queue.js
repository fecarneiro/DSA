class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
queue.enqueue('teclado');
queue.dequeue();
queue.enqueue('teclado');
queue.enqueue('teclado');
queue.enqueue('teclado');
queue.dequeue();
queue.enqueue('teclado');
queue.enqueue('batata');
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue('teclado');
queue.enqueue('batata');
queue.enqueue('teclado');
queue.enqueue('batata');

console.log(queue.peek());
console.log(queue.size());
console.log(queue);
console.log(queue.toString());
