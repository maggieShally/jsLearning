/*
 * @Description:
 * @Date: 2022-07-22 15:01:26
 * @LastEditTime: 2022-07-22 15:25:59
 * @FilePath: \webpack-teste:\learn\node\sign\learn\递归\tree.js
 */
var arr = [
  { id: 1, name: "用户管理", pid: 0 },
  { id: 2, name: "菜单申请", pid: 1 },
  { id: 3, name: "信息申请", pid: 1 },
  { id: 4, name: "模块记录", pid: 2 },
  { id: 5, name: "系统设置", pid: 0 },
  { id: 6, name: "权限管理", pid: 5 },
  { id: 7, name: "用户角色", pid: 6 },
  { id: 8, name: "菜单设置", pid: 6 },
];

function arryToTree(arr) {
  let treeMap = {};

  let treeList = [];

  for (let item of arr) {
    const { id, pid } = item;
    if (!treeMap[id]) {
      treeMap[id] = {
        children: [],
      };
    }
    treeMap[id] = {
      ...item,
      children: treeMap[id]["children"],
    };

    const treeItem = treeMap[id];

    if (pid === 0) {
      treeList.push(treeItem);
    } else {
      treeMap[pid].children.push(treeItem);
    }
  }
  return treeList;
}

console.log(JSON.stringify(arryToTree(arr)));
