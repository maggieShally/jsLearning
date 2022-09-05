/*
 * @Description: 学习 手写 promise
 * @Date: 2021-12-14 10:07:59
 * @LastEditTime: 2022-06-27 17:39:37
 * @FilePath: \webpack-teste:\learn\node\sign\learn\promise.js
 */

// 三种状态，pending 执行中，resolve，成功，reject失败
//

// class MyPromise {
//   constructor(excuar) {
//     this.status = "pending";
//     this.successFun = [];
//     this.failFun = [];
//     this.value = null;

//     try {
//       excuar(this.resolve.bind(this), this.reject.bind(this));
//     } catch (err) {
//       this.reject(err);
//     }
//   }

//   resolve(value) {
//     if (this.status !== "pending") return;
//     this.value = value;
//     this.status = "resolve";
//     this.successFun.shift()(this.value);

//   }

//   reject(value) {
//     if (this.status !== "pending") return;
//     this.value = value;
//     this.status = "reject";
//     while (this.failFun.length) {
//       this.failFun.shift()(this.value);
//     }
//   }

//   then(onFulfiled, onRejected) {

//     // 链式调返回一个新的 promise ，then的resolve,reject存数据
//     const thenPromise = new MyPromise((resolve, reject) => {
//       const resolvePromise = (cb) => {
//         try {
//           let x = cb(this.value);
//           if (x === thenPromise) {
//             throw new Error("it is same");
//           }

//           if (x instanceof MyPromise) {
//             x.then(resolve, reject);
//           } else {
//             resolve(x);
//           }
//         } catch (err) {
//           reject(err);
//         }
//       };

//       if (this.status === "pending") {
//         this.successFun.push(resolvePromise.bind(this, onFulfiled));

//         this.failFun.push(resolvePromise.bind(this, onRejected));
//       }
//     });

//     return thenPromise;

//   }
// }

// function fn() {
//   return new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.6) {
//         resolve("大于");
//       } else {
//         resolve("小于");
//       }
//     });
//   });
// }

// fn()
//   .then(
//     (val) => {
//       console.log(val);
//       return val;
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then((res) => {
//     console.log(12, res);
//   });

class MyPromise {
  constructor(excuar) {
    this.status = "pendding";
    this.value = "";

    this.successFun = [];
    this.failFun = [];

    try {
      excuar(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(value) {
    if (this.status !== "pendding") return;
    this.status = "resolve";
    this.value = value;
    this.successFun.shift()(this.value);
  }

  reject(value) {
    if (this.status !== "pendding") return;
    this.status = "reject";
    this.value = value;
    this.failFun.shift()(this.value);
  }

  then(onResolveFun, onRejectFun) {
    const thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (calcValueFunc) => {
        try {
          let thenValue = calcValueFunc(this.value);
          resolve(thenValue);
        } catch (err) {
          reject(err);
        }
      };

      if (this.status === "pendding") {
        this.successFun.push(resolvePromise.bind(this, onResolveFun));
        this.failFun.push(resolvePromise.bind(this, onRejectFun));
      }
    });

    return thenPromise;
  }
}

const resPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    const temp = Math.random();
    if (temp > 0.6) {
      resolve("大于");
    } else {
      reject("小于");
    }
  });
});

resPromise
  .then(
    (val) => {
      return val + "resolve";
    },
    (err) => {
      return err
      console.log(err);
    }
  )
  .then((val) => {
    return val + 'CC'
  }, err => {
    console.log(err);
  }).then(val => {
    console.log(val);

  }, err => {
    console.log(err);
  });
