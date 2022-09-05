/*
 * @Description: 解析 URL 参数为对象
 * @Date: 2021-12-14 16:06:48
 * @LastEditTime: 2021-12-14 16:36:19
 * @FilePath: \webpack-teste:\learn\node\sign\learn\parseParam.js
 */

function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]
  const paramsArr = paramsStr.split('&')
  let paramsObj  = {}
  paramsArr.forEach(item => {
    if(/=/.test(item)) {
      let [key, value] = item.split('=')
      value = decodeURIComponent(value) // 解码
      // value = /^\d+$/.test(value) ? parseFloat(value) : value // 是否需要转 数字
      if(paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = [].concat(paramsObj[key], value)
      } else {
        paramsObj[key] = value
      }
    } else {
      paramsObj[item] = true
    }
  
  })
  return paramsObj
}

console.log(parseParam('https://juejin.cn/search?query=%E6%89%8B%E5%86%99promise&params&query="adc"&temp=1212'))
// { query: [ '手写promise', '"adc"' ], params: true }
