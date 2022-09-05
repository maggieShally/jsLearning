/*
 * @Description: 渲染字符串模版
 * @Date: 2021-12-14 16:36:25
 * @LastEditTime: 2022-07-25 10:29:21
 * @FilePath: \webpack-teste:\learn\node\sign\learn\rendTemplate.js
 */

// 递归 一个一个{{}}替换

function renderTemplate(template,data) {
  const reg = /\{\{(\w+)\}\}/
  if(reg.test(template)) {
    const name = reg.exec(template)[1]
    console.log(reg.exec(template))
    template = template.replace(reg, data[name])
    return renderTemplate(template, data)
  }
  return template
}

const str = '我是{{name}},今年{{age}}'
const data = {
  name: 'XX',
  age:12
}

console.log(renderTemplate(str, data))