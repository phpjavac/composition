const includes = ["[object HTMLTextAreaElement]", "[object HTMLInputElement]"];
const useFocus = function() {
  if (arguments.length !== 2) {
    console.warn("\u53C2\u6570\u5217\u8868\u4E0D\u6B63\u786E, \u5165\u53C2\u957F\u5EA6\u5E94\u4E3A2\uFF01");
  } else if (Object.prototype.toString.call(arguments[1]) !== "[object Function]") {
    console.warn("\u53C2\u6570\u5217\u8868\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5E94\u4E3A\u56DE\u8C03\u51FD\u6570\uFF01");
  } else if (Object.prototype.toString.call(arguments[0]) === "[object Array]") {
    arguments[0].forEach((item, index) => {
      if (includes.findIndex((child) => child === Object.prototype.toString.call(item)) !== -1) {
        item.addEventListener("focus", arguments[1]);
        item.addEventListener("blur", arguments[1]);
      } else {
        console.warn(`\u6570\u7EC4\u4F4D\u7F6E\u7B2C${index}\u4E2A\u53C2\u6570\u4E0D\u5408\u6CD5`);
      }
    });
  } else if (includes.findIndex((item) => item === Object.prototype.toString.call(arguments[0])) !== -1) {
    arguments[0].addEventListener("focus", arguments[1]);
    arguments[0].addEventListener("blur", arguments[1]);
  } else {
    console.warn("\u53C2\u6570\u5217\u8868\u7B2C\u4E00\u4E2A\u53C2\u6570\u5E94\u4E3ADom\uFF01");
  }
};
export default useFocus;
