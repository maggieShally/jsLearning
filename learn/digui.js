/*
 * @Description: 递归
 * @Date: 2022-06-23 14:47:10
 * @LastEditTime: 2022-07-22 14:18:48
 * @FilePath: \webpack-teste:\learn\node\sign\learn\digui.js
 */

const { result } = require("lodash");

function Fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

/**
 * @description: 非递归
 * @return {Number}
 */
function FibonacciNo(n) {
  if (n <= 1) {
    return n;
  }

  let i = 1,
    pre = 0,
    current = 1,
    result = 0;

  while (i++ < n) {
    result = pre + current;
    pre = current;
    current = result;
  }

  return result;
}

// console.log(Fibonacci(8));
// console.log(FibonacciNo(8));

let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const calcArrLiet = function (data, pid) {
  let result = [];

  getChildrenTree(data, result, pid);

  return result;
};

const getChildrenTree = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const subItem = { ...item, children: [] };

      getChildrenTree(data, subItem.children, subItem.id);

      result.push(subItem);
    }
  }
};

// console.log(JSON.stringify(calcArrLiet(arr, 0)))

const arryToTree = (arr) => {
  const result = [];
  const itemMap = {};

  for (const item of arr) {
    itemMap[item.id] = { ...item, children: [] };
  }

  for (const item of arr) {
    const { id, pid } = item;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      } else {
        itemMap[pid].children.push(treeItem);
        
      }
    }
  }
  return result;
};

const arrytoTreeOneFor = (arr) => {
  const result = [];
  const itemMap = {};

  for (const item of arr) {
    const { id, pid } = item;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };

    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          ...item,
          children: [],
        };
      } else {
        itemMap[pid].children.push(treeItem);
      }
    }
  }

  return result;
};


const rendArrayToTree  = arr => {

  let result  = []
  let itemMap = {}

  for(const item of arr) {

    const { id, pid } = item

    if(!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id]
    if(pid === 0) {
      result.push(treeItem)
    } else {

      if(itemMap[pid]) {
        itemMap[pid].children.push(treeItem)
      } else {
        itemMap[pid] = {
          children: []
        }
      }
    }
  }

  return result
}

// console.log(JSON.stringify(rendArrayToTree(arr)));


