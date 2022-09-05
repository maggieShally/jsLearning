/*
 * @Description: 数组倒置
 * @Date: 2022-07-22 14:25:33
 * @LastEditTime: 2022-07-22 14:34:34
 * @FilePath: \webpack-teste:\learn\node\sign\learn\递归\reverse.js
 */


function reverse(arr) {
  if(arr.length == 0 || arr.length === 1) {
    return arr
  }
  console.log(arr[0])
  console.log(arr.slice(1))
  return [...reverse(arr.slice(1)), arr[0]]
}

const arr = [1,2,4,3,2,3,]
console.log(reverse(arr))