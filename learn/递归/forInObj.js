/*
 * @Description:
 * @Date: 2022-07-22 14:36:36
 * @LastEditTime: 2022-07-22 14:44:50
 * @FilePath: \webpack-teste:\learn\node\sign\learn\递归\forInObj.js
 */

/**
 * @description: 遍历对象
 * @param {*} obj
 * @return {*}
 */
function forInObj(obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (typeof obj[k] === "object") {
        forInObj(obj[k]);
      } else {
        console.log(`${k}: ${obj[k]}`);
      }
    }
  }
}

var obj = {
  id: 1,
  value: "parent",
  child: {
    id: 11,
    value: "child",
    child: {
      id: 111,
      value: "child-child",
      hobby: ["x", "x2", "x3"],
    },
  },
};

// forInObj(obj)

/**
 * @description:
 * @return {*}
 */

function flatObj(obj, parentKey) {
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (typeof obj[k] === "object") {
        flatObj(obj[k], parentKey ? parentKey + "." + k : k);
      } else {
        console.log(`${parentKey ? parentKey + "." + k : k} : ${obj[k]}`);
      }
    }
  }
}

const oldObject = {
  KeyA: 1,
  KeyB: {
    c: 2,
    d: 3,
    e: {
      f: 7,
      "": 2,
    },
  },
};
flatObj(oldObject);
