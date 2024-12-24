const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  // Returns the root of the tree.
  root() {
    return this._root;
  }

  // Adds a new node with the given data to the tree.
  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
      return;
    }

    let current = this._root;

    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this._root;

    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  min() {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
