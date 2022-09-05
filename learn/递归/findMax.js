/*
 * @Description: 
 * @Date: 2022-07-22 14:15:07
 * @LastEditTime: 2022-07-22 14:18:19
 * @FilePath: \webpack-teste:\learn\node\sign\learn\递归\findMax.js
 */



/**
 * @description: 求数组最大值 
 * @return {string}
 */

function findMax(arr) {
  if(arr.length === 1)
  {
    return arr [0]
  } else if(arr.length === 2) {
    return Math.max(arr[0], arr[1])
  } else {

    const index = Math.floor(arr.length / 2)
    const leftArr = findMax(arr.slice(0, index))
    const rightArr = findMax(arr.slice(index))

    return leftArr > rightArr ? leftArr : rightArr
  }

}

const arr = [1,12,3,4,5,6,7,8]

console.log(findMax(arr))
