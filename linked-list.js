class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //ponteiro (referência)
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head; //precisa percorrer desde o começo
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
  }

  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

const linkedList = new LinkedList();
linkedList.append(10).append(20).append(30).printList();

/* Notes
  Números, Strings são passados como parâmetros (cópia)
  Objetos, Arrays são passados como referência (ponteiro)

*/
