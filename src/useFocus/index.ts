/* eslint-disable prefer-rest-params */
/* eslint-disable class-methods-use-this */
const includes = ['[object HTMLTextAreaElement]', '[object HTMLInputElement]'];
const useFocus = function() {

  if(arguments.length !== 2) {
    console.warn("参数列表不正确, 入参长度应为2！");
  } else if(Object.prototype.toString.call(arguments[1]) !== "[object Function]") {
    console.warn('参数列表第二个参数应为回调函数！');
  } else if(Object.prototype.toString.call(arguments[0]) === "[object Array]") {
    arguments[0].forEach((item: HTMLElement, index: number) => {
      if(includes.findIndex((child) => child === Object.prototype.toString.call(item)) !== -1) {
        item.addEventListener('focus', arguments[1]);
        item.addEventListener('blur', arguments[1]);
      } else {
        console.warn(`数组位置第${ index }个参数不合法`);
      }
    })
  } else if(includes.findIndex((item) => item === Object.prototype.toString.call(arguments[0])) !== -1) {
    arguments[0].addEventListener('focus', arguments[1]);
    arguments[0].addEventListener('blur', arguments[1]);
  } else {
    console.warn('参数列表第一个参数应为Dom！');
  }

}

export default useFocus;