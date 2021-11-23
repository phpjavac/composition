export interface UseWaitTime {
    /** 异步执行函数 */
    funAsync: () => void;
    /** 最小执行时间 */
    time: number;
    /** 满足最小时间后，执行的函数 */
    funThen: () => void;
}

/** 异步函数执行，大于设定的最小时间后，执行另一个函数 */
const useWaitTime = async (
  funAsync: () => void,
  time: number,
  funThen: () => void,
) => {
  const timeStart = new Date().getTime();
  await funAsync();
  const timeEnd = new Date().getTime();
  const timeDiff = timeEnd - timeStart;
  if (timeDiff > time) {
    funThen();
  } else {
    setTimeout(() => {
      funThen();
    }, time - timeDiff);
  }
};

export default useWaitTime;