/*
 * @Description: 
 * @Date: 2022-02-28 09:27:02
 * @LastEditTime: 2022-06-02 14:23:29
 * @FilePath: \webpack-teste:\learn\node\sign\learn\lodash.js
 */
var lodash = require('lodash')

const obj = {
  name: 'xx',
  data: {
    dimen: {
      type: 'xxx',
      field: [1,2,3]
    },
    quota: {
      filed: [
        {
          a: '1',
          d: { c:'3'}
        }
      ]
    }
  }
}

lodash.update(obj, 'data.quota.filed', function()  {
  return [
    {
      a: '1',
      d: {}
    }
  ]
})

console.log(obj)

