/*
 * @Description:
 * @Date: 2021-12-14 11:40:55
 * @LastEditTime: 2022-02-24 15:59:45
 * @FilePath: \webpack-teste:\learn\node\sign\learn\jicheng.js
 */

// class 继承
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log("hello", this.name);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const taiDi = new Dog("TD", 12);
// taiDi.getName()

//原型链: 引用类型会被 共享, 不能给父类传参
function AnimalProp() {
  this.colors = ["black", "white"];
  this.name = "hello";
}
AnimalProp.prototype.getName = function () {
  console.log("hello", this.colors);
};

function DogProp() {}

DogProp.prototype = new AnimalProp();

const dog1 = new DogProp();
dog1.colors.push("brown");
dog1.name = "TD";
const dog2 = new DogProp();

// console.log(dog2.colors); // [ 'black', 'white', 'brown' ]
// console.log(dog2.name); // hello


// 构造函数
function AnimalGZ(name) {
  this.name = name;
  this.sayHello = () => {
    console.log("hello", this.name);
  };
}

function DogGZ(name, age) {
  AnimalGZ.call(this, name);
  this.age = age;
}
const dogGZ1 = new DogGZ("TD", 2);
console.log(DogGZ)
// console.log(dogGZ1.sayHello())


// 组合继承
function AnimalZH(name) {
  this.name = name;
  this.colors = ['black', 'white']

}

AnimalZH.prototype.getName = function (name) {
  console.log('helloZH',this.name);
};

function DogZH(name, age) {
  this.age = age
  AnimalZH.call(this, name)
}

const animal = new AnimalZH()

DogZH.prototype = animal

DogZH.prototype.constructor = DogZH

const dogZH1 = new DogZH('TD', 12)
dogZH1.colors.push('red')

const dogZH2 = new DogZH('ZZ', 33)

// console.log(dogZH2.colors)


// 数组去重 1
const uiArr = [ 2,3,42,1,2,3,3]
function uique(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}
// console.log(uique(uiArr))



// 数组去重 2
const uique2 = arr => [...new Set(arr)]



// 平铺数据 [1,[2,[3]]] => [1,2,3]
function flatten(arr) {
  let result = []
  for(let i = 0; i< arr.length;i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten([1,[2,[3]]]))

