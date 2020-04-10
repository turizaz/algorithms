class BSTNode {
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

  searchTree(node, value) {
    if (value < node.value) {
      return node.left
          ? this.searchTree(node.left, value)
          : (node.left = new BSTNode(value));
    } else {
      return node.right
          ? this.searchTree(node.right, value)
          : (node.right = new BSTNode(value));
    }
  }

  add(value) {
    const node = this.root;
    if (this.root === null) {
      this.root = new BSTNode(value);
      return;
    } else {
      return this.searchTree(node, value);
    }
  }

  findMin() {
    let currentRoot = this.root;

    if (this.root === null) return null;

    while (currentRoot) {
      if (currentRoot.left === null) {
        return currentRoot.value;
      }
      currentRoot = currentRoot.left;
    }
  }

  findMax() {
    let currentRoot = this.root;

    if (this.root === null) return null;

    while (currentRoot) {
      if (currentRoot.right === null) {
        return currentRoot.value;
      }
      currentRoot = currentRoot.right;
    }
  }

  isPresent(value) {
    let currentRoot = this.root;
    while (currentRoot.value !== value) {
      if (value < currentRoot.value) {
        if (currentRoot.left === null) return false;
        currentRoot = currentRoot.left;
      }
      if (value > currentRoot.value) {
        if (currentRoot.right === null) return false;
        currentRoot = currentRoot.right;
      }
    }
    return true;
  }
}

const bst = new BST();

bst.add(14);
bst.add(9);
bst.add(12);
bst.add(22);
bst.add(17);
bst.add(3);
bst.add(-1);
bst.add(25);

bst.findMin();
bst.findMax();
bst.isPresent(-2);
bst.isPresent(17);
