class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  insert(element) {
    let current;

    if (this.head == null) {
      const newNode = new Node(element);
      this.head = newNode;
      current = this.head;
    }

    while (this.next != null) {
      const newNode = new Node(element);
      current = this.next;
      this.next = newNode;
    }
    this.count++;
  }
}

let linkedList = new LinkedList();
linkedList.insert(123);
linkedList.insert(333);
console.log(linkedList);
