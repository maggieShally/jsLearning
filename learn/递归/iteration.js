/*
 * @Description: 遍历打印数组
 * @Date: 2022-07-22 14:21:13
 * @LastEditTime: 2022-07-22 14:24:25
 * @FilePath: \webpack-teste:\learn\node\sign\learn\递归\iteration.js
 */

function iteration(arr) {
  if(arr.length === 0) return 
  if(arr.length === 1) {
    console.log(arr[0])
    return
  }
  console.log(arr[0])
  iteration(arr.slice(1))
}
const arr = [1,2,4,3,2,3,]

iteration(arr)