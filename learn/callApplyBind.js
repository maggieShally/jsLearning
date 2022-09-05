/*
 * @Description: 
 * @Date: 2021-12-16 16:45:20
 * @LastEditTime: 2022-07-25 11:13:18
 * @FilePath: \webpack-teste:\learn\node\sign\learn\callApplyBind.js
 */

//call实现
Function.prototype.call2 = function (context, ...args) {
  var context = context || window;
  context.fc = this; // 改变this 指向 引用者
  let result,
    argss = [];

  for (let i = 1; i < arguments.length; i++) {
    argss.push("arguments[" + i + "]");
  }

  result = context.fc; // eval 相当于调了一次 TestParent函数，然后，把所以的 属性 添加到了 context（即child）

  delete context.fc;

  return result;
};

function TestParent(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("sayHello", this.name, this.age);
  };
}

function TestChild(name, age) {
  TestParent.call2(this, name, age);
}

const child = new TestChild("xx", 2);
// console.log(child);
// child.sayHello();








// apply
Function.prototype.apply2 = function (context, arr) {
  var context = context || window;
  context.fn = this;

  let args = [],
    result;

  if (!arr) {
    result = context.fn();
  } else {
    for (let i = 0; i < arr.length; i++) {
      args.push("arr[" + i + "]");
    }

    console.log(args)
    result = eval("context.fn(" + args + ")");
  }
  delete context.fn;
  return result;
};

function TestParentApply(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("sayHello apply(", this.name, this.age);
  };
}

function TestChildApply(name, age) {
  TestParentApply.apply2(this, [name, age]);
}

const childApply = new TestChildApply("222xx", 332);
childApply.sayHello();










//bind
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

const moduleBind = {
  x: 42,
  getX: function () {
    return this.x;
  },
};


const getX = moduleBind.getX
// console.log(getX())

const getBindX = getX.bind2(moduleBind)
// console.log(getBindX())
