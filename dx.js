class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.rigth = null;
  }
}

class BST {
  constructor(data) {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
    }
  }
  insertNode(current, newNode) {
    if (data > current.value) {
      current.left = data;
    } else {
      current.rigth = data;
    }
  }
}

const bst = new BST();
bst.insert(123);
bst.insert(333);
console.log(bst);
