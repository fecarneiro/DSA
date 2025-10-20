class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      if (this.left === null && this.rigth === null) {
        if (data > this.value) {
          this.left = new Node(data);
        }
      }
    }
  }
}

const bst = new BST();
bst.insert(100);
bst.insert(200);
console.log(bst.root.left);
console.log(bst.root.rigth);
console.log(bst.root.value);
console.log(bst.root);

/* NOTES
  BST - Binary Search Tree
  Root = nó inicial raiz
  Nós podem ter: 0, 1, 2 filhos
  Nós possuem PONTEIROS: direita e esquerda
  Nós sem filhos = folha/terminal
  Nó da esquerda sempre MENOR que da direita
  Nó da direita sempre MAIOR que da esquerda


  Quando um novo elemento é acrescentado a árvore:
  1. Verifica se o número é maior que o root, se for, vai para direita
  2. Se for menor que o root, vai para a esquerda

  Tipos de árvores binárias:
  1. Full BST = cada nó tem 0 ou 2 filhos
  2. Complete BST = todos nós tem 2 filhos com exceção com os últimos (bottom)
  3. Perfect BST = todos nós tem 2 filhos (é também uma Full BST)
  4. Balanced BST = lados iguais com no máximo 1 nó de diferença entre ambos
  */
