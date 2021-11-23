var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const useWaitTime = (funAsync, time, funThen) => __async(this, null, function* () {
  const timeStart = new Date().getTime();
  yield funAsync();
  const timeEnd = new Date().getTime();
  const timeDiff = timeEnd - timeStart;
  if (timeDiff > time) {
    funThen();
  } else {
    setTimeout(() => {
      funThen();
    }, time - timeDiff);
  }
});
export default useWaitTime;
