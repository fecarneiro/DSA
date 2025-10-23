class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  toString() {
    return `[${this.data}]->${this.next} `;
  }
}

const myNode1 = new Node();
const myNode2 = new Node();
const myNode3 = new Node();
const myNode4 = new Node();
const myNode5 = new Node();

myNode1.data = 'dog';
myNode2.data = 'cat';
myNode3.data = 'fish';
myNode4.data = 'bird';
myNode5.data = 'turtle';
myNode1.next = myNode2;
myNode2.next = myNode3;
myNode3.next = myNode4;
myNode4.next = myNode5;

console.log(myNode1.toString());

const arr = [];
arr.push(myNode1);
arr.push(myNode2);
arr.toString();
