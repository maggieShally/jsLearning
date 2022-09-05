/*
 * @Description: 发布 订阅
 * @Date: 2021-12-14 15:59:26
 * @LastEditTime: 2021-12-14 16:06:13
 * @FilePath: \webpack-teste:\learn\node\sign\learn\eventEmitter.js
 */

class EventEmitter {
  constructor() {
    this.catch = {};
  }
  on(name, fn) {
    this.catch[name] = this.catch[name] || [];
    this.catch[name].push(fn);
  }
  emit(name, params) {
    if(this.catch[name]) {
      this.catch[name].forEach((func) => {
        func(params);
      });
    }
    
  }
  off(name) {
    this.catch[name] = [];
  }
}

const provider = new EventEmitter();


provider.on("sayHello", function (value) {
  console.log("sayHello", value);
});

provider.on("sayHello", function (value) {
  console.log("sayHelloTTTTTT", value);
});

provider.emit("sayHello", "my name is helloWord");
