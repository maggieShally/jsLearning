/*
 * @Description:
 * @Date: 2021-08-27 16:00:36
 * @LastEditTime: 2022-09-05 12:29:22
 * @FilePath: \webpack-teste:\learn\node\test\jsLearning\test.js
 */

var players = [
  {
    name: "XM",
    age: "12",
  },
  {
    name: "GG",
    age: "13",
  },
  {
    name: "KK",
    age: "14",
  },
];



Array.prototype.sx_forEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

Array.prototype.sx_map = function (callBack) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callBack(this[i], i, this));
  }
  return res;
};

Array.prototype.sx_filter = function (callBack) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this) && res.push(this[i]);
  }
  return res;
};

const obj = {
  name: "CC",
  age: 23,
  gender: "female",
};

Object.prototype.sx_entries = function (obj) {
  const res = [];
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      res.push([k, obj[k]]);
    }
  }
  return res;
};

Object.prototype.sx_fromEntries = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
};

let patches = {
  0: {
    a: 1,
  },
  1: {
    a: 2,
  },
  2: {
    a: 3,
  },
};
var allPatches;
let index = 0;

const node = {
  name: 1,
  ege: 2,
  children: [
    {
      name: 3,
      ege: 4,
      children: [
        {
          name: 3,
        },
      ],
    },
  ],
};

function patch(node, patches) {
  allPatches = patches;
  walk(node);
}

function walk(node) {
  let current = allPatches[index++];
  const children = node.children;

  if (children && children.length) {
    children.forEach((child) => walk(child));
  }

  if (current) {
    doPatch(node, current);
  }
}

function doPatch(node, current) {
  console.log("current:" + index + "-" + JSON.stringify(current));
}

// patch(node, patches)

//call 继承

function Animal(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("hello", this.name);
  };
}

function Dog(age, name) {
  this.age = age;
  Animal.call(this, name);
}

// const xMM = new Dog(12, 'xrn')

// console.log(xMM.name)
// console.log(xMM.sayHello())

// 冒泡

var arr = [32, 3, 5, 62, 1, 2, 77];

function sortMap(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 快速
function sortQuick(arr) {
  let left = [], right =[], temp

  if(arr.length === 0) return arr

  temp = arr[(Math.floor(arr.length / 2))]

  for(let i = 0 ;i < arr.length ;i++) {
    if(arr[i] < temp) {
      left.push(arr[i])
    } else if(arr[i] > temp) {
      right.push(arr[i])
    }
  }
  return sortQuick(left).concat(temp).concat(sortQuick(right))
}

// 选择

function sortSelect(arr) {
  let minIndex

  for(let i = 0; i < arr.length ; i++) {
    minIndex = i
    for(let j = i; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr

}

// console.log(sortSelect(arr));


// 节流
function throttle(fn, delay) {
  let last = 0 //上一次执行时间
  return function(...args) {
    const now = Date.now()
    if(now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

function task() {
  console.log('run task')
}
const throttleTask = throttle(task, 1000)
window.addEventListener('scroll', throttleTask)
