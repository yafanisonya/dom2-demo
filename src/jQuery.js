window.jQuery = function (selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  //api可以操作elements
  //const api = {
  return {
    //闭包：函数访问外部变量
    find(selector) {
      let array = []
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(elements[i].querySelectorAll(selector))
        array = array.concat(elements2)
      }
      //const newApi = jQuery(array)
      //return newApi
      array.oldApi = this  // this就是旧api
      return jQuery(array)
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this
    },
    parent() {
      const array = []
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode)
        }
      })
      return jQuery(array)
    },
    children() {
      const array = []
      this.each((node) => {
        array.push(...node.children)  //将数组打平
      })
      return jQuery(array)
    },
    print() {
      console.log(elements)
    },
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      // obj.fn(p1) === obj.fn.call(obj,p1) 函数里的this就是obj
      //return api
      return this
    },
    oldApi: selectorOrArray.oldApi,
    end() {
      return this.oldApi  // this就是新api
    }
    //return api
  }
}