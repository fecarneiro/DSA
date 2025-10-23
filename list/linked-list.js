class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  toString() {
    return `[${this.value}]->${this.next} `;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  print() {
    let current = this.head;
    let result = 'Head -> ';
    while (current !== null) {
      result += `${current.value} -> `;
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

const list = new LinkedList();
list.append(3);
list.append(4);
list.append(5);
list.append(5);
list.append(5);
list.print();
