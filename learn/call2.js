/*
 * @Description:
 * @Date: 2022-02-28 16:58:50
 * @LastEditTime: 2022-07-25 10:08:43
 * @FilePath: \webpack-teste:\learn\node\sign\learn\call2.js
 */

Function.prototype.call2 = function (context, ...args) {
  context.fn = this;

  let result;

  result = context.fn(...args);
  delete context.fn;
 
  return result;
};

function Call2Parent(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("Hello", this.name, this.age);
  };
}

function Call2Child(name, age) {
  Call2Parent.call2(this, name, age);
}

const call2Test = new Call2Child("Nacy", 12);
console.log(call2Test)

// 获取argument对象 类数组对象 不能调用数组方法
function test1() {
  let arr = [];

  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }

  console.log("获取argument对象 类数组对象 不能调用数组方法", arr);
}

// 获取参数数组  可以调用数组方法
function test2(...args) {
  console.log("获取参数数组  可以调用数组方法", [...args]);
}

// 获取除第一个参数的剩余参数数组
function test3(first, ...args) {

  const others = Array.prototype.slice.call(arguments, 1)
  console.log("获取argument对象 类数组对象 不能调用数组方法", others);
}

 // 透传参数
 function test4(first, ...args) {
  fn(...args);
  fn(...arguments);
}


// test3(1, 2, 3);
