/*
 * @Description:
 * @Date: 2022-08-01 14:57:57
 * @LastEditTime: 2022-08-02 11:20:56
 * @FilePath: \webpack-teste:\learn\node\sign\learn\设计模式\factory.js
 */

class Modal {
  constructor() {
    let modal = document.createElement("div");
    modal.innerHTML = "我是一个全局唯一的Modal";
    modal.id = "modal";
    modal.style.display = "none";
    document.body.appendChild(modal);
    return modal;
  }

  static getInstance() {
    if (!Modal.instance) {
      Modal.instance = new Modal();
    }

    return Modal.instance;
  }
}

const testModal = Modal.getInstance();
console.log(testModal);
