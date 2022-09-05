/*
 * @Description: 
 * @Date: 2021-12-20 11:33:54
 * @LastEditTime: 2022-01-10 10:40:15
 * @FilePath: \webpack-teste:\learn\node\sign\learn\imgLazyload.js
 */


// 懒加载 getBoundingClientRect 返回元素大小 及基 相对于视口的位置 
const imgs = [...document.querySelectorAll('img')]

const imgLazyLoad = (function() {
  let count = 0

  return function() {
    let deleteIndexList = []
    for(let i = 0; i< imgs.length; i++) {
      const rect = imgs[i].getBoundingClientRect()
      if(rect.top < window.innerHeight) {
        // 进入视窗的修改 img 的src 显示图片
        imgs[i].src = imgs[i].dataset.src
        count ++

        deleteIndexList.push(i)

         if(count === imgs.length) {
           // 全部处理完以后，取消事件监听
           window.removeEventListener('scoll', imgLazyLoad)
         }
      }
    }

    // 仅处理 还未显示的图表
    imgs = imgs.filter((_,index) => !deleteIndexList.includes(index))
  }
})()

// 加上防抖
window.addEventListener('scoll', imgLazyLoad)



// imgLazyload2 IntersectionObserver 观察目标元素与祖先元素或顶及文档的交叉状态
// intersectionRatio 0 视窗之类 > 0 视察内

const imgLit = [...document.querySelectorAll('img')]
const observe = new IntersectionObserver(entries  => {
  entries.forEach(item => {
  if(entries.intersectionRatio > 0) {
        entries.target.src = entries.target.dataset.src
        observe.unObserve()
      }
  })
})

imgList.forEach(img => {
  observe.observe(img)
})



