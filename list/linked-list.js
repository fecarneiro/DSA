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
      let current;
      while (this.next !== null) {
        current = this.next;
      }
      current = newNode;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log(JSON.stringify(linkedList, null, 2));
