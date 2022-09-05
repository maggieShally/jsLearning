/*
 * @Description: 
 * @Date: 2022-07-11 16:28:40
 * @LastEditTime: 2022-07-11 16:50:56
 * @FilePath: \webpack-teste:\learn\node\sign\learn\temp.js
 */


const arr = [1,2,3,4,54,1,2,4]

function uniqueArray(arr) {

  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}

console.log(uniqueArray(arr))