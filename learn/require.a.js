/*
 * @Description: 
 * @Date: 2021-12-22 10:36:02
 * @LastEditTime: 2022-01-10 11:52:53
 * @FilePath: \webpack-teste:\learn\node\sign\learn\require.a.js
 */


var a = {
  xx: {
    name: 1
  }
}

function count() {
  a = {}
  console.log('内', a)
}

module.exports.a = a
module.exports.count = count
