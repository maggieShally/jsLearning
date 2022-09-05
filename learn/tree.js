/*
 * @Description: 二叉树学习
 * @Date: 2022-03-03 10:00:07
 * @LastEditTime: 2022-06-23 17:29:39
 * @FilePath: \webpack-teste:\learn\node\sign\learn\tree.js
 */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    console.log(this.data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data, null, null);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (current) {
        let parent = current;

        if (data < parent.data) {
          current = parent.left;

          if (!current) {
            parent.left = node;
            return;
          }
        } else if (data > parent.data) {
          current = parent.right;

          if (!current) {
            parent.right = node;
            return;
          }
        }
      }
    }
  }

  getNode(data, node) {
    if (node) {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return this.getNode(data, node.left);
      } else {
        return this.getNode(data, node.right);
      }
    }
  }
}

const t = new Tree();

t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);

// console.log(t.getNode(5, t.root));

const arr = [3, 8, 1, 2, 5, 7, 6, 0];

// 中序
var inorderFunc = (root, arr = []) => {
  if (root) {
    inorderFunc(root.left, arr);
    arr.push(root.data);
    inorderFunc(root.right, arr);

    return arr;
  } else {
    return arr;
  }
};

// console.log(inorderFunc(t.root))

var inorderFunc2 = (root) => {
  let result = [];

  let stack = [];

  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      console.log("left", current.data);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    console.log(current.data);
    result.push(current.data);
    current = current.right;
  }

  return result;
};

// console.log(inorderFunc2(t.root));

// 前序排列
const preorderFun = (root, arr = []) => {
  if (root) {
    arr.push(root.data);
    preorderFun(root.left, arr);
    preorderFun(root.right, arr);
  }
  return arr;
};

console.log(preorderFun(t.root));

const preorderFun2 = (root, arr = []) => {
  const result = [];
  const stack = [];

  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      result.push(current.data);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    current = current.right;
  }

  return result;
};

// console.log(t)
console.log(preorderFun2(t.root));



//后序
const postOrderFun = (root) => {
  const result = [];
  const stack = [];
  let last = "";

  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack[stack.length - 1];

    if (!current.right || current.right === last) {
     
      current = stack.pop();
      result.push(current.data);
      last = current;
      current = null

    } else {
      current = current.right;
    }
  }
  return result
};
console.log(postOrderFun(t.root));




function Permutation(str) {
  const result = [];
  if (str) {
    queue = str.split('') // [a, b, c ]
    PermutationCore(queue, result);
  }
  result.sort();
  return [... new Set(result)];
}

function PermutationCore(queue, result, temp = "", current = "") {
  current += temp;
  if (queue.length === 0) {
    result.push(current);
    return;
  }
  for (let i = 0; i < queue.length; i++) {
    temp = queue.shift();
    PermutationCore(queue, result, temp, current);
    queue.push(temp);
  }
}


console.log(Permutation('abc'))