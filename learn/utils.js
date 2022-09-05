/*
 * @Description:
 * @Date: 2021-12-14 16:44:08
 * @LastEditTime: 2022-02-24 15:46:59
 * @FilePath: \webpack-teste:\learn\node\sign\learn\utils.js
 */

const { threadId } = require("worker_threads");

// 校验数据类型
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(typeOf([]));
console.log(typeOf({}));
console.log(typeOf(1));
console.log(typeOf("a"));

//节流 N秒内只执行一次
function throttle(fn, delay) {
  let timer = 0;
  return function (...arg) {
    let now = Date.now();
    if (now - timer > delay) {
      timer = now;
      fn.apply(this, arg);
    }
  };
}

//防抖 N 秒后执行一次，N秒内多次触发，会重新计算,()
function debounce(fn, delay, immediate) {
  let timer;

  let debounced = function (...arg) {
    timer && clearTimeout(timer);

    if (immediate) {
      var callNow = !timer; //如果有timer 就不走立即执行了

      timer = setTimeout(() => {
        timer = null;
      }, delay);

      if (callNow) {
        fn.apply(this.arg);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arg);
      }, delay);
    }
  };

  debounced.cancel = function () {
    clearTimeout(timer);
    timeout = null;
  };

  return debounced;
}

// 柯里化
function curry(fn) {
  let judge = (...args) => {
    console.log(args, fn);
    if (args.length === fn.length) return fn(...args);
    return (...arg) => judge(...args, ...arg);
  };
  return judge;
}

const add = function (a, b, c) {
  return a + b + c;
};

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3))

// Object.getPrototypeOf()
Object.create2 = function (proto, propertyObject = undefined) {
  var res = {};
  res.__proto__ = proto;
  if (propertyObject != undefined) {
    Object.defineProperties(res, propertyObject);
  }
  return res;
};


// 实现 instanceOf 理解
function instanceOf(left , right) {
  // 获取 left 的原型
  let proto = Object.getPrototypeOf(left)

  while(true) {
    // 与 right原型进行比较
    if(proto === null) return false
    if(proto === right.prototype) {
      return true
    }
    // 继续向上查原型的原型
    proto = Object.getPrototypeOf(proto)
  }
}

const arr = []

function Snp(params) {
}

const newSnp = new Snp()

console.log(instanceOf(arr, Array)) // true
console.log(instanceOf(arr, Number)) // false
console.log(instanceOf(newSnp, Snp)) // true





// new Object 理解

function objectFactory() {
  const obj = {}
  const constructor = [].shift.call(arguments) // 要继承的对象 

  constructor.apply(obj, arguments)

  // 把obj【构造函数原型——__proto__】 指向 继承对象的原型
  obj.__proto__ = constructor.prototype
  return obj
  
}

function OfPreson(name, age) {
  this.name = name
  this.age = age
}

const ofChild = objectFactory(OfPreson, 'a', 12)
console.log(ofChild)